import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AboutUs.css';
import DoneIcon from '@mui/icons-material/Done';
import { Container, List, ListItemButton, ListItemText, ListItemIcon, Collapse, Button } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';



const Results = () => {
    const [pnmResults, setPNMResults] = useState([]); //RAW PNM SURVEYS RESULTS
    const [chapterResults, setChapterResults] = useState([]); //RAW CHAPTER SURVEY RESULTS
    const [bumpGroupResults, setBumpGroupResults] = useState([]); //RAW BUMP GROUP SURVEY RESULTS
    const [openGroups, setOpenGroups] = useState({});
    const [selectedIndex, setSelectedIndex] = useState(null); //variable used to control who is being clicked for their survey results
    const [displayNames, setDisplayNames] = useState([]); //holds an array with the name and whether they submmited the survey or not in the form of true/false
    const [selectedResult, setSelectedResult] = useState(null); //used to hold the data from the selected person
    const [bumpGroups, setBumpGroups] = useState([]);
    const [listOfDictionaries, setListOfDictionaries] = useState([]);//created by Maya this holds all the members extracted bump groups so just one big array w all people 
    const [pnmDictionaries, setPNMDictionary] = useState([]); //one big array that holds all PNMS in one array ^same format as above array **** this doesnt seem to be used anywhere
    const [detailedBumpGroups, setDetailedBumpGroups] = useState({});
    const [matches, setMatches] = useState([]);
    const [numberOfPNMs, setNumberOfPNMs] = useState();

    const handleListItemClick = (name) => {
        const result = chapterResults.find(result => {
            const fullName = `${result.surveyData["First Name"]} ${result.surveyData["Last Name"]}`;
            return fullName === name;
        });

        if (result) {
            const formattedResult = formatSurveyData(result);
            setSelectedResult(formattedResult);
        } else {
            setSelectedResult(null);
        }

        setSelectedIndex(name);
    };


    const formatSurveyData = (result) => {
        if (!result) return '';
        const { "First Name": firstName, "Last Name": lastName, "State": state, "Hometown": hometown, "Major": major, "Involvement": involvement, "Activities": activities } = result.surveyData;
        const countyKey = `${state} Counties`;
        const county = result.surveyData[countyKey] || '';

        return `
        Name: ${firstName} ${lastName}
        Hometown: ${hometown}, ${county} County, ${state}
        Major: ${major.join(', ')}
        Involvement: ${involvement.join(', ')}
        Activities: ${activities.join(', ')}
    `;
    };

    const handleGroupClick = (group) => {
        setOpenGroups(prevState => ({
            ...prevState,
            [group]: !prevState[group]
        }));
    };

    useEffect(() => {  // FETCH CHAPTER SURVEY
        axios.get('http://localhost:5000/api/survey-results?surveyType=KD Survey')
            .then((response) => {
                setChapterResults(response.data);  // Update the state with fetched results
                console.log('KD Survey results fetched:', response.data);
            })
            .catch((error) => {
                console.error('Error fetching DG Survey results:', error);
            });
    }, []);  // Empty dependency array ensures this runs once on component load


    useEffect(() => { // FETCH BUMP GROUPS 
        axios.get('http://localhost:5000/api/survey-results?surveyType=Info Page')
            .then((response) => {
                setBumpGroupResults(response.data);  // Update the state with fetched results
                console.log('Info Page survey results fetched:', response.data);
            })
            .catch((error) => {
                console.error('Error fetching Info Page survey results:', error);
            });
    }, []);

    useEffect(() => { //FETCH PNMs
        axios.get('http://localhost:5000/api/survey-results?surveyType=PNM Survey')
            .then((response) => {
                setPNMResults(response.data);  // Update the state with fetched results
                console.log('PNM Survey survey results fetched:', response.data);
            })
            .catch((error) => {
                console.error('Error fetching PNM Survey survey results:', error);
            });
    }, []);


    const extractNames = (results) => { //Method to extract names from the survey results 
        return results.map(result => {
            const firstName = result.surveyData["First Name"];
            const lastName = result.surveyData["Last Name"];
            const fullName = `${firstName} ${lastName}`;
            return fullName;
        });
    };

    const extractBumpNames = (surveyResult) => { //Method to extract names from the bump group survey results
        const bumpGroups = {};
          bumpGroupResults.forEach(result => { //iterate over reach result in bump group results 
            Object.keys(result.surveyData).forEach(bumpKey => { //iterate over the keys in result.surveyData
              if (bumpKey.startsWith("Bump")) {
                const bumpGroup = result.surveyData[bumpKey]; //gets the bump group data
                const bumpGroupValues = Object.values(bumpGroup); //get values of the bump group
              if (bumpGroups[bumpKey]) { //if bump group alr exists in bumpGroups
                  bumpGroups[bumpKey] = bumpGroups[bumpKey].concat(bumpGroupValues); //concat the new values to the existing arrays
                } else {
                  bumpGroups[bumpKey] = bumpGroupValues; //intitalize the key with the new names 
                }
              }
            });
          });
          console.log("Bump Groups Dictionary:", bumpGroups);
          //setBumpGroups(bumpGroups);
        return bumpGroups;
    };

    const compareNames = (chapterNames, bumpGroups) => {
        const comparedResults = {};
        for (let bump in bumpGroups) {
            comparedResults[bump] = bumpGroups[bump].map(name => ({
                name,
                isInNamesOnly: chapterNames.includes(name)
            }));
        }
        return comparedResults;
    };

    useEffect(() => { // Sets the names to display in the list
        if (chapterResults.length > 0 && bumpGroupResults.length > 0) { // If both chapterResults and BumpGroupResults are populated
            const namesOnly = extractNames(chapterResults);
            console.log('Names only:', namesOnly);

            const bumpGroups = bumpGroupResults.map(result => extractBumpNames(result));
            const combinedBumpGroups = bumpGroups.reduce((acc, curr) => {
                for (let bump in curr) {
                    if (acc[bump]) {
                        acc[bump] = acc[bump].concat(curr[bump]);
                    } else {
                        acc[bump] = curr[bump];
                    }
                }
                return acc;
            }, {});

            const comparedNames = compareNames(namesOnly, combinedBumpGroups);
            console.log('Compared Names:', comparedNames);
            setDisplayNames(comparedNames);
        }
    }, [chapterResults, bumpGroupResults]);


    useEffect(() => { // Sets the names to display in the list
        if (chapterResults.length > 0) {
            const listOfDictionaries = chapterResults.map(result => {
                const state = result.surveyData["State"]
                const countyKey = state + " Counties";

                return {
                    FirstName: result.surveyData["First Name"],
                    LastName: result.surveyData["Last Name"],
                    Hometown: result.surveyData["Hometown"],
                    State: state,
                    County: result.surveyData[countyKey],
                    Major: result.surveyData["Major"],
                    Involvement: result.surveyData["Involvement"],
                    Activities: result.surveyData["Activities"]
                };
            });
            // Log the list of dictionaries
            console.log("PARSED MEMBERS FOR FOR ALG:", listOfDictionaries);

            setListOfDictionaries(listOfDictionaries);
        }

        // This if statement formats pnm data
        if (pnmResults.length > 0) {
            const pnmDictionaries = pnmResults.map(result => {
                const state = result.surveyData["State"]
                const countyKey = state + " Counties";

                return {
                    FirstName: result.surveyData["First Name"],
                    LastName: result.surveyData["Last Name"],
                    Hometown: result.surveyData["Hometown"],
                    State: state,
                    County: result.surveyData[countyKey],
                    Major: result.surveyData["Major"],
                    Involvement: result.surveyData["Involvement"],
                    Activities: result.surveyData["Activities"]
                };
            });

            // Sorts alphabetically and assigns PNM numbers
            const sortedListOfPNMs = pnmDictionaries.sort((a, b) => {
                if (a['LastName'] < b['LastName']) return -1;
                if (a['LastName'] > b['LastName']) return 1;
                return 0; // If last names are equal, maintain original order
            });
            
            // Assign PNM number to each entry
            let counter = 1;
            sortedListOfPNMs.forEach(entry => {
                entry["PNM number"] = counter;
                counter++;
            });
            
            setPNMDictionary(sortedListOfPNMs);
            console.log("PNMS FOR ALG WITH NUMBERS:", sortedListOfPNMs);
        }

        // This if statement creates the appropriate bump groups
        if (bumpGroupResults.length > 0) {
            const bumpGroups = {};
        
            // Loop through each result
            bumpGroupResults.forEach(result => {
              // Loop through each bump group key
              Object.keys(result.surveyData).forEach(bumpKey => {
                if (bumpKey.startsWith("Bump")) {
                  // Extract the bump group object
                  const bumpGroup = result.surveyData[bumpKey];
        
                  // Create an array of just the values (names), ignoring the keys
                  const bumpGroupValues = Object.values(bumpGroup);
        
                  // If the bumpGroup key already exists, concatenate the new values
                  if (bumpGroups[bumpKey]) {
                    bumpGroups[bumpKey] = bumpGroups[bumpKey].concat(bumpGroupValues);
                  } else {
                    // Else, initialize it with the current values
                    bumpGroups[bumpKey] = bumpGroupValues;
                  }
                }
              });
            });
        
            // Use bumpGroups as needed
            console.log("Bump Groups Dictionary:", bumpGroups);
            setBumpGroups(bumpGroups);
          }

          // This if statement extracts the size of bump groups for PNMs ONLY
          if (bumpGroupResults.length > 0) {
            // Create an object to store the number of PNMs for each result
            const numberOfPNMs = bumpGroupResults.map(result => {
              // Extract the "How many PNMS" value from surveyData
              return result.surveyData["How many PNMS"];
            });
        
            // Log the "How many PNMS" values for each result
            console.log("How many PNMS per bump group:", numberOfPNMs);
        
            // If you need to store it in state, you could do it here
            setNumberOfPNMs(numberOfPNMs);  // Example if you are using state
          }


    }, [chapterResults, bumpGroupResults]);

    // WHERE LOGIC OF ALGORITHM BEGINS




 

        useEffect(() => {
            const createBumpGroupsWithDetails = () => {
                const bumpGroupsWithDetails = {};
                Object.keys(bumpGroups).forEach(bumpKey => {
                    bumpGroupsWithDetails[bumpKey] = [];
                    const groupMembers = bumpGroups[bumpKey];
    
                    groupMembers.forEach(memberName => {
                        const memberDetails = listOfDictionaries.find(
                            member => `${member.FirstName} ${member.LastName}` === memberName
                        );
    
                        if (memberDetails) {
                            bumpGroupsWithDetails[bumpKey].push(memberDetails);
                        }
                    });
                });
    
                console.log("Bump Groups with details:", bumpGroupsWithDetails);
                setDetailedBumpGroups(bumpGroupsWithDetails);
            };
    
            if (Object.keys(bumpGroups).length > 0 && listOfDictionaries.length > 0) {
                createBumpGroupsWithDetails();
            }
        }, [bumpGroups, listOfDictionaries]);
    
        // useEffect to calculate percentages once detailedBumpGroups is updated
        useEffect(() => {
            const calculatePercent = (detailedBumpGroups, pnmDictionaries) => {
                // Initialize new data structure
                const pnmCompatibility = {};
                // Loop through each PNM
                pnmDictionaries.forEach(pnm => {
                        // Set an empty array for each PNM to hold percents
                        pnmCompatibility[pnm['PNM number']] = []
                        // Loop over bump groups
                        for (const [bumpKey, bumpGroupMembers] of Object.entries(detailedBumpGroups)) {
                            const bumpGroupMembers = detailedBumpGroups[bumpKey];
                            // Check if bumpGroupMembers exists and has items
                            if (!Array.isArray(bumpGroupMembers) || bumpGroupMembers.length === 0) {
                              console.warn(`No members found for bump group ${bumpKey}`);
                              return;
                            }
                            // 
                            var locationTotal = 0;
                            var majorTotal = 0;
                            var interestsTotal = 0;
                            var involvementTotal = 0;

                            bumpGroupMembers.forEach(member => {
                                locationTotal += location(member, pnm);
                                majorTotal += major(member.Major, pnm.Major);
                                interestsTotal += interests(member.Activities, pnm.Activities);
                                involvementTotal += involvement(member.Involvement, pnm.Involvement);
                                //console.log("calculating...");
                            })
                            var bumpGroupTotal = ((locationTotal + majorTotal + interestsTotal + involvementTotal) / (16 * bumpGroupMembers.length)) * 100;

                    
                            //console.log(bumpGroupTotal);
                            // Edit this one line to add name 
                            pnmCompatibility[pnm["PNM number"]].push(bumpGroupTotal);
                            //pnmCompatibility[pnm["Name"]].push(pnm.FirstName + pnm.LastName);
                        }
                        });
                // console.log("PNM Compatibility:", pnmCompatibility);
                // console.log(pnmCompatibility[1]); // This shows that it is actually working just not printing in console
                // console.warn(Object.entries(pnmDictionaries).length); There are only 50 PNMs so it makes sense that not all bump groups would be full
              
                return pnmCompatibility;
              };
    
            const location = (member, pnm) => {
                // console.warn("member: " + member['State'] + " pnm: " + pnm["State"]);
                if (member['State'] === pnm['State'] && member['County'] === pnm['County'] && member['Hometown'] === pnm['Hometown']) {
                    return 5;
                } else if (member['State'] === pnm['State'] && member['County'] === pnm['County']) {
                    return (5 / 3) * 2;
                } else if (member['State'] === pnm['State']) {
                    return 5 / 3;
                } else {
                    return 0;
                }
            };
        
            const major = (memberMajors, pnmMajors) => {
                // console.warn("member: " + memberMajors + " pnm: " + pnmMajors);
                if (!Array.isArray(pnmMajors)) {
                    return 0; // Return 0 if pnmInvs is not an array
                }
                if (!Array.isArray(memberMajors)) {
                    return 0; // Return 0 if pnmInvs is not an array
                }
                return pnmMajors.some(pnmMajor => memberMajors.includes(pnmMajor)) ? 4 : 0;
            };
        
            const interests = (memberInts, pnmInts) => {
                // console.warn("member: " + memberInts + " pnm: " + pnmInts);
                if (!Array.isArray(pnmInts)) {
                    return 0; // Return 0 if pnmInvs is not an array
                }
                if (!Array.isArray(memberInts)) {
                    return 0; // Return 0 if pnmInvs is not an array
                }
                return pnmInts.filter(pnmInt => memberInts.includes(pnmInt)).length;
            };
        
            const involvement = (memberInvs, pnmInvs) => {
                // console.warn("member: " + memberInvs + " pnm: " + pnmInvs);
                if (!Array.isArray(pnmInvs)) {
                    return 0; // Return 0 if pnmInvs is not an array
                }
                if (!Array.isArray(memberInvs)) {
                    return 0; // Return 0 if memberInvs is not an array or is undefined
                }
                return pnmInvs.reduce((score, pnmInv) => {
                    return memberInvs.includes(pnmInv) ? score + (4 / 3) : score;
                }, 0);
            };
        
            
            const match = (pnmPcts) => {
                const finalMatches = {};
                for (let j = 1; j <= Object.keys(detailedBumpGroups).length; j++) {
                    finalMatches[j] = [];
                }
                
            // Why percents may be showing up as 0%:
            // Empty Percent Lists: If percentList is empty, percentList.forEach() won't execute at all.
            // Once we resolve the empty bump group issue, we can see if that's what's also causing issues with this

                let processedPNMs = new Set();

        
                for (let i = 100; i >= 0; i--) {
                    for (const [pnm, percentList] of Object.entries(pnmPcts)) {
                        percentList.forEach((percent, index) => {
                            // Round the percentage to the nearest integer
                            const roundedPercent = Math.round(Number(percent));
                            
                            if (roundedPercent === i && finalMatches[index + 1].length <= numberOfPNMs && percent != null && Number(percent) != 0) {
                                if (!processedPNMs.has(pnm)){
                                    /*
                                    const pnmDict = pnmDictionaries.find(dict => dict.pnm === pnm);
                                    finalMatches[index + 1].push({ [pnm]: pnmDict['FirstName']});
                                    */
                                    const fullName = getFullNameByPNMNumber(Number(pnm), pnmDictionaries);
                                    finalMatches[index + 1].push({
                                         [pnm]: { 
                                            name: fullName, 
                                            compatibility: `${roundedPercent}%`
                                        }
                                    }); 
                                    processedPNMs.add(pnm);
                                    pnmPcts[pnm] = [];
                                }
                            }
                        });
                    }
                }
            
                // console.warn(finalMatches[8]);
                return finalMatches;
            };
            
        
            const createMatches = () => {
                const pnmPercents = calculatePercent(detailedBumpGroups, pnmDictionaries);
                console.log(calculatePercent(detailedBumpGroups, pnmDictionaries));
                const finalMatches = match(pnmPercents);
        
                console.log("Final Matches:", finalMatches);
                setMatches(finalMatches);
            };
        
            if (detailedBumpGroups && pnmDictionaries.length > 0) {
                createMatches();
            }
        }, [detailedBumpGroups, pnmDictionaries]);

        const getFullNameByPNMNumber = (pnmNumber, data) => {
            const pnm = data.find(item => item["PNM number"] === pnmNumber);
            return pnm ? `${pnm.FirstName} ${pnm.LastName}` : null; // Return null if PNM number is not found
        };
    

    return (
        <div>
            <h2 style={{ fontFamily: 'Georgia, serif', fontWeight: 'normal' }}>View Results</h2>
           
            
            {selectedResult && (
                <div className="selected-result">
                    <h2 style={{ fontFamily: 'Georgia, serif', fontWeight: 'normal' }}>Selected Result</h2>
                   <pre>{selectedResult}</pre>
                </div>
            )}

            <div className="matches">
            <ul>
                {Object.keys(matches).map((key) => (
                    <li key={key}>
                        <strong>Bump {key}:</strong>
                        <ul>
                            {matches[key].map((match, index) => (
                                <li key={index}>
                                    {Object.entries(match).map(([id, details]) => (
                                        <span key={id}>
                                            {`${details.name}, PNM ${id} - Compatibility: ${details.compatibility}`}
                                        </span>
                                    ))}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
            </div>

            <List className="results-list">
                {Object.keys(displayNames).map((bump, index) => (
                    <div key={index}>
                        <ListItemButton onClick={() => handleGroupClick(bump)}>
                            <ListItemText primary={bump} />
                            {openGroups[bump] ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={openGroups[bump]} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                {displayNames[bump].map((item, idx) => (
                                    <ListItemButton 
                                        key={idx} 
                                        selected={selectedIndex === item.name} 
                                        onClick={() => handleListItemClick(item.name)}
                                        className="results-list-item"
                                    >
                                        <ListItemText primary={item.name} />
                                        {item.isInNamesOnly && (
                                            <ListItemIcon>
                                                <DoneIcon />
                                            </ListItemIcon>
                                        )}
                                    </ListItemButton>
                                ))}
                            </List>
                        </Collapse>
                    </div>
                ))}
            </List>


        </div>
    );
};

export default Results;