import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AboutUs.css';
import Button from '@mui/material/Button';
import DoneIcon from '@mui/icons-material/Done';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';

const Results = () => {
    const [chapterResults, setChapterResults] = useState([]);
    const [expectedResults, setExpectedResults] = useState([]);
    const [pnmResults, setPNMResults] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [displayNames, setDisplayNames] = useState([]);
    const [selectedResult, setSelectedResult] = useState(null);
    const [bumpGroups, setBumpGroups] = useState([]);
    const [listOfDictionaries, setListOfDictionaries] = useState([]);
    const [detailedBumpGroups, setDetailedBumpGroups] = useState({});
    const [matches, createMatches] = useState({});


    const handleButtonClick = () => {
        const namesOnly = extractNames(chapterResults);
        console.log('Names only:', namesOnly);
        const bumpNames = expectedResults.map(result => extractBumpNames(result));
        console.log('Bump Names:', bumpNames.flat());
        const comparedNames = bumpNames.flat().map(name => ({
            name,
            isInNamesOnly: namesOnly.includes(name)
        }));
        // Log the entire comparedNames array
        console.log('Compared Names:', comparedNames);
        // Set the displayNames state with comparedNames
        setDisplayNames(comparedNames);
    };

    const extractNames = (results) => {
        return results.map(result => {
            const firstName = result.surveyData["First Name"];
            const lastName = result.surveyData["Last Name"];
            const fullName = `${firstName} ${lastName}`;
            return fullName;
        });
    };

    const extractBumpNames = (surveyResult) => {
        const names = [];
        for (let i = 1; i <= 40; i++) {
            const bumpGroup = surveyResult.surveyData[`Bump ${i}`];
            if (bumpGroup) {
                for (let key in bumpGroup) {
                    if (bumpGroup.hasOwnProperty(key)) {
                        names.push(bumpGroup[key]);
                    }
                }
            }
        }
        return names;
    };

    const handleListItemClick = (name) => {
        setSelectedIndex(name);
        const [firstName, lastName] = name.split(' ');
        const result = chapterResults.find(result => {
            return result.surveyData["First Name"] === firstName && result.surveyData["Last Name"] === lastName;
        });
        setSelectedResult(result);
    };

    useEffect(() => {
        axios.get('http://localhost:5000/api/survey-results?surveyType=KD Survey')
            .then((response) => {
                setChapterResults(response.data);  // Update the state with fetched results
                console.log('KD Survey results fetched:', response.data);
            })
            .catch((error) => {
                console.error('Error fetching DG Survey results:', error);
            });
    }, []);  // Empty dependency array ensures this runs once on component load

    useEffect(() => {
        axios.get('http://localhost:5000/api/survey-results?surveyType=Info Page')
            .then((response) => {
                setExpectedResults(response.data);  // Update the state with fetched results
                console.log('Info Page survey results fetched:', response.data);
            })
            .catch((error) => {
                console.error('Error fetching Info Page survey results:', error);
            });
    }, []);

    useEffect(() => {
        axios.get('http://localhost:5000/api/survey-results?surveyType=PNM Survey')
            .then((response) => {
                setPNMResults(response.data);  // Update the state with fetched results
                console.log('PNM Survey survey results fetched:', response.data);
            })
            .catch((error) => {
                console.error('Error fetching PNM Survey survey results:', error);
            });
    }, []);

    useEffect(() => {
        if (chapterResults.length > 0) {
            // Use map() to create a list of dictionaries (objects)
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
            console.log("List of dictionaries:", listOfDictionaries);
            setListOfDictionaries(listOfDictionaries);
        }
    }, [chapterResults]);  // Runs every time chapterResults is updated

    // Parse PNM Survey Data
    useEffect(() => {
        if (pnmResults.length > 0) {
            // Use map() to create a list of dictionaries (objects)
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
    
            // Log the list of dictionaries
            console.log("List of PNM dictionaries:", pnmDictionaries);
            setPNMResults(pnmDictionaries);
        }
    }, [chapterResults]);  // Runs every time chapterResults is updated

    useEffect(() => {
        if (expectedResults.length > 0) {
          const bumpGroups = {};
      
          // Loop through each result
          expectedResults.forEach(result => {
            // Loop through each bump group key (e.g., 'Bump 1', 'Bump 2', etc.)
            Object.keys(result.surveyData).forEach(bumpKey => {
              if (bumpKey.startsWith("Bump")) {
                // Extract the bump group object (e.g., result.surveyData['Bump 1'])
                const bumpGroup = result.surveyData[bumpKey];
      
                // Create an array of just the values (names), ignoring the keys
                const bumpGroupValues = Object.values(bumpGroup);
      
                // If the bumpGroup key already exists, concatenate the new values
                if (bumpGroups[bumpKey]) {
                  bumpGroups[bumpKey] = bumpGroups[bumpKey].concat(bumpGroupValues);
                } else {
                  // Otherwise, initialize it with the current values
                  bumpGroups[bumpKey] = bumpGroupValues;
                }
              }
            });
          });
      
          // Use bumpGroups as needed, e.g., setting state
          console.log("Bump Groups Dictionary:", bumpGroups);
          setBumpGroups(bumpGroups);
        }
      }, [expectedResults]);

      useEffect(() => {
        if (expectedResults.length > 0) {
          // Create an object to store the number of PNMs for each result
          const numberOfPNMs = expectedResults.map(result => {
            // Extract the "How many PNMS" value from surveyData
            return result.surveyData["How many PNMS"];
          });
      
          // Log the "How many PNMS" values for each result
          console.log("How many PNMS per bump group:", numberOfPNMs);
      
          // If you need to store it in state, you could do it here
          // setPNMs(numberOfPNMs);  // Example if you are using state
        }
      }, [expectedResults]);

      useEffect(() => {
        const createBumpGroupsWithDetails = () => {
            const bumpGroupsWithDetails = {};

            // Loop through each bump group (e.g., 'Bump 1', 'Bump 2', etc.)
            Object.keys(bumpGroups).forEach(bumpKey => {
                bumpGroupsWithDetails[bumpKey] = [];

                // Get the list of names for this bump group
                const groupMembers = bumpGroups[bumpKey];

                // Loop through each name in the bump group
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
            setDetailedBumpGroups(bumpGroupsWithDetails); // Update state with detailed bump groups
        };

        if (bumpGroups && listOfDictionaries.length > 0) {
            createBumpGroupsWithDetails(); // Call function if both states are populated
        }
    }, [bumpGroups, listOfDictionaries]);


    // This is an attempt at implementing the algorithm
    // I am going to come back to it but wanted to push PNM data processing changes first
    // You can delete / edit this as you will
    /*

    useEffect(() => {
        const calculatePercent = (bumpGroups, pnms) => {
            const pnmCompatibility = {};
    
            pnms.forEach(pnm => {
                pnmCompatibility[pnm['PNM number']] = Array(Object.keys(bumpGroups).length).fill(0);
            });
    
            Object.keys(bumpGroups).forEach((bumpKey, bumpGroupIndex) => {
                const bumpGroupMembers = bumpGroups[bumpKey];
                bumpGroupMembers.forEach(member => {
                    pnms.forEach(pnm => {
                        const locationTotal = location(member, pnm);
                        const majorTotal = major(member.Major, pnm.Major);
                        const interestsTotal = interests(member.Activities, pnm.Activities);
                        const involvementTotal = involvement(member.Involvement, pnm.Involvement);
                        const bumpGroupTotal = ((locationTotal + majorTotal + interestsTotal + involvementTotal) / (16 * bumpGroupMembers.length)) * 100;
    
                        pnmCompatibility[pnm['PNM number']][bumpGroupIndex] = Math.round(bumpGroupTotal);
                    });
                });
            });
    
            return pnmCompatibility;
        };
    
        const location = (member, pnm) => {
            if (member.State === pnm.State && member.County === pnm.County && member.Hometown === pnm.Hometown) {
                return 5;
            } else if (member.State === pnm.State && member.County === pnm.County) {
                return (5 / 3) * 2;
            } else if (member.State === pnm.State) {
                return 5 / 3;
            } else {
                return 0;
            }
        };
    
        const major = (memberMajors, pnmMajors) => {
            if (!Array.isArray(pnmMajors)) {
                return 0; // Return 0 if pnmInvs is not an array
            }
            return pnmMajors.some(pnmMajor => memberMajors.includes(pnmMajor)) ? 4 : 0;
        };
    
        const interests = (memberInts, pnmInts) => {
            if (!Array.isArray(pnmInts)) {
                return 0; // Return 0 if pnmInvs is not an array
            }
            return pnmInts.filter(pnmInt => memberInts.includes(pnmInt)).length;
        };
    
        const involvement = (memberInvs, pnmInvs) => {
            if (!Array.isArray(pnmInvs)) {
                return 0; // Return 0 if pnmInvs is not an array
            }
            return pnmInvs.reduce((score, pnmInv) => {
                return memberInvs.includes(pnmInv) ? score + (4 / 3) : score;
            }, 0);
        };
    
        const match = (pnmPercents) => {
            const finalMatches = {};
            for (let j = 1; j <= 20; j++) {
                finalMatches[j] = [];
            }
    
            for (let i = 100; i >= 0; i--) {
                for (const [pnm, percentList] of Object.entries(pnmPercents)) {
                    percentList.forEach((percent, index) => {
                        if (percent === i && finalMatches[index + 1].length < 5) {
                            finalMatches[index + 1].push({ [pnm]: `${percent}%` });
                            pnmPercents[pnm] = [];
                        }
                    });
                }
            }
    
            return finalMatches;
        };
    
        const createMatches = () => {
            const pnmPercents = calculatePercent(detailedBumpGroups, pnmResults);
            const finalMatches = match(pnmPercents);
    
            console.log("Final Matches:", finalMatches);
            // If you need to set state for final matches, you can do it here
            // setFinalMatches(finalMatches); // Uncomment if you're using state to store matches
        };
    
        if (detailedBumpGroups && pnmResults.length > 0) {
            createMatches();
        }
    }, [detailedBumpGroups, pnmResults]);
    
    */

    return (
        <div className="AboutUs">
            <h1>View Results</h1>
            <Button 
                variant="contained" 
                style={{
                    backgroundColor: '#F94EA0',
                    color: '#fff',
                }}
                onClick={handleButtonClick}
            >
                Get Results!
            </Button> 
            <List className="results-list">
                {displayNames.map((item, index) => (
                    <ListItemButton 
                        key={index} 
                        selected={selectedIndex === item.name} 
                        onClick={() => handleListItemClick(item.name)}
                        className="results-list-item"
                        disabled={!item.isInNamesOnly} // Disable if not in namesOnly
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
            {selectedResult && (
                <div className="selected-result">
                    <h2>Selected Result</h2>
                    <pre>{JSON.stringify(selectedResult, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default Results;