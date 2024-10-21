import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AboutUs.css';
import DoneIcon from '@mui/icons-material/Done';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';

const Results = () => {
    const [pnmResults, setPNMResults] = useState([]); //RAW PNM SURVEYS RESULTS
    const [chapterResults, setChapterResults] = useState([]); //RAW CHAPTER SURVEY RESULTS
    const [bumpGroupResults, setBumpGroupResults] = useState([]); //RAW BUMP GROUP SURVEY RESULTS
    const [selectedIndex, setSelectedIndex] = useState(null); //variable used to control who is being clicked for their survey results
    const [displayNames, setDisplayNames] = useState([]); //holds an array with the name and whether they submmited the survey or not in the form of true/false
    const [selectedResult, setSelectedResult] = useState(null); //used to hold the data from the selected person
    const [bumpGroups, setBumpGroups] = useState([]);
    const [listOfDictionaries, setListOfDictionaries] = useState([]);//created by Maya this holds all the members extracted bump groups so just one big array w all people 
    const [pnmDictionaries, setPNMDictionary] = useState([]); //one big array that holds all PNMS in one array ^same format as above array **** this doesnt seem to be used anywhere
    const [detailedBumpGroups, setDetailedBumpGroups] = useState({});
    const [matches, setMatches] = useState({});
    const [numberOfPNMs, setNumberOfPNMs] = useState();


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
        const names = [];
        for (let i = 1; i <= 40; i++) { //iterate through bump groups
            const bumpGroup = surveyResult.surveyData[`Bump ${i}`]; //constructs a key for each bump group 
            if (bumpGroup) { //if bump group exists 
                for (let key in bumpGroup) { //loops thru each key in bump group: the key is name1 bc its formatted like {name1: moriah owens}
                    if (bumpGroup.hasOwnProperty(key)) {
                        names.push(bumpGroup[key]); //adds to names array
                    }
                }
            }
        }
        return names;
    };

    useEffect(() => { //Sets the names to dislay in list 
        if (chapterResults.length > 0 && bumpGroupResults.length > 0) { //if both chapterResults and bumpGroupResults are populated
            const namesOnly = extractNames(chapterResults); //extract names from Chapter Members info
            //console.log('Names only:', namesOnly);

            const bumpNames = bumpGroupResults.flatMap(result => extractBumpNames(result)); //flatMap combines all the arrays of bump group into one array
            //console.log('Bump Names:', bumpNames);

            const comparedNames = bumpNames.map(name => ({ //compares the names from the bump groups to the names from the chapter members
                name,
                isInNamesOnly: namesOnly.includes(name)
            }));

            console.log('Compared Names:', comparedNames);
            setDisplayNames(comparedNames);
        }
    }, [chapterResults, bumpGroupResults]); //This will run anytime there is a change to chapterResults or expectedResults (once they are populated in the first useEffects)


    const handleListItemClick = (name) => { //this method is used to fetch the data associated with the name clicked
        setSelectedIndex(name);
        const [firstName, lastName] = name.split(' ');
        const result = chapterResults.find(result => {
            return result.surveyData["First Name"] === firstName && result.surveyData["Last Name"] === lastName;
        });
        setSelectedResult(result);
    };

    // START OF ALG STUFF
    // this is working
    // useEffect(() => { //format member data for alg
        // if (chapterResults.length > 0) {
        //     // Use map() to create a list of dictionaries (objects)
        //     const listOfDictionaries = chapterResults.map(result => {
        //         const state = result.surveyData["State"]
        //         const countyKey = state + " Counties";

        //         return {
        //             FirstName: result.surveyData["First Name"],
        //             LastName: result.surveyData["Last Name"],
        //             Hometown: result.surveyData["Hometown"],
        //             State: state,
        //             County: result.surveyData[countyKey],
        //             Major: result.surveyData["Major"],
        //             Involvement: result.surveyData["Involvement"],
        //             Activities: result.surveyData["Activities"]
        //         };
        //     });
        //     // Log the list of dictionaries
        //     console.log("PARSED MEMBERS FORMATTED FOR ALG:", listOfDictionaries);

        //     setListOfDictionaries(listOfDictionaries); // MAYBE REMOVE

        //     // Set the list of dictionaries in a state if you need to use it later
        //     // setSomeState(listOfDictionaries);

        // }
    // }, [chapterResults]);  // Runs every time chapterResults is updated

    // // Parse PNM Survey Data
    // // this is working
    // useEffect(() => { //format PNM data for alg
        // if (pnmResults.length > 0) {
        //     // Use map() to create a list of dictionaries (objects)
        //     const pnmDictionaries = pnmResults.map(result => {
        //         const state = result.surveyData["State"]
        //         const countyKey = state + " Counties";

        //         return {
        //             FirstName: result.surveyData["First Name"],
        //             LastName: result.surveyData["Last Name"],
        //             Hometown: result.surveyData["Hometown"],
        //             State: state,
        //             County: result.surveyData[countyKey],
        //             Major: result.surveyData["Major"],
        //             Involvement: result.surveyData["Involvement"],
        //             Activities: result.surveyData["Activities"]
        //         };
        //     });
    
        //     // Log the list of dictionaries
        //     console.log("PARSED PNMs FOR ALG:", pnmDictionaries);
        //     setPNMDictionary(pnmDictionaries);
        // }
    // }, [pnmResults]);  // Runs every time chapterResults is updated

    // // this is working
    // useEffect(() => {
        // if (bumpGroupResults.length > 0) {
        //   const bumpGroups = {};
      
        //   // Loop through each result
        //   bumpGroupResults.forEach(result => {
        //     // Loop through each bump group key (e.g., 'Bump 1', 'Bump 2', etc.)
        //     Object.keys(result.surveyData).forEach(bumpKey => {
        //       if (bumpKey.startsWith("Bump")) {
        //         // Extract the bump group object (e.g., result.surveyData['Bump 1'])
        //         const bumpGroup = result.surveyData[bumpKey];
      
        //         // Create an array of just the values (names), ignoring the keys
        //         const bumpGroupValues = Object.values(bumpGroup);
      
        //         // If the bumpGroup key already exists, concatenate the new values
        //         if (bumpGroups[bumpKey]) {
        //           bumpGroups[bumpKey] = bumpGroups[bumpKey].concat(bumpGroupValues);
        //         } else {
        //           // Otherwise, initialize it with the current values
        //           bumpGroups[bumpKey] = bumpGroupValues;
        //         }
        //       }
        //     });
        //   });
      
        //   // Use bumpGroups as needed, e.g., setting state
        //   console.log("Bump Groups Dictionary:", bumpGroups);
        //   setBumpGroups(bumpGroups);
        // }
    //   }, [bumpGroupResults]);

    //   useEffect(() => {
        // if (bumpGroupResults.length > 0) {
        //   // Create an object to store the number of PNMs for each result
        //   const numberOfPNMs = bumpGroupResults.map(result => {
        //     // Extract the "How many PNMS" value from surveyData
        //     return result.surveyData["How many PNMS"];
        //   });
      
        //   // Log the "How many PNMS" values for each result
        //   console.log("How many PNMS per bump group:", numberOfPNMs);
      
        //   // If you need to store it in state, you could do it here
        //   // setPNMs(numberOfPNMs);  // Example if you are using state
        // }
    //   }, [bumpGroupResults]);

    //   useEffect(() => {
        // const createBumpGroupsWithDetails = () => {
        //     const bumpGroupsWithDetails = {};

        //     // Loop through each bump group (e.g., 'Bump 1', 'Bump 2', etc.)
        //     Object.keys(bumpGroups).forEach(bumpKey => {
        //         bumpGroupsWithDetails[bumpKey] = [];

        //         // Get the list of names for this bump group
        //         const groupMembers = bumpGroups[bumpKey];

        //         // Loop through each name in the bump group
        //         groupMembers.forEach(memberName => {
        //             const memberDetails = listOfDictionaries.find(
        //                 member => `${member.FirstName} ${member.LastName}` === memberName
        //             );

        //             if (memberDetails) {
        //                 bumpGroupsWithDetails[bumpKey].push(memberDetails);
        //             }
        //         });
        //     });

        //     console.log("Bump Groups with details:", bumpGroupsWithDetails);
        //     setDetailedBumpGroups(bumpGroupsWithDetails); // Update state with detailed bump groups
        // };

        // if (bumpGroups && listOfDictionaries.length > 0) {
        //     createBumpGroupsWithDetails(); // Call function if both states are populated
        // }
    // }, [bumpGroups, listOfDictionaries]);



    // // For debugging!
    // useEffect(() => {
    //     if (bumpGroups.length > 0 && listOfDictionaries.length > 0) {
    //       setDetailedBumpGroups();
    //       console.log("Detailed Bump Groups:", detailedBumpGroups);
    //     } 
    //     if(bumpGroups.length <= 0){
    //         console.warn("Bump group is empty");
    //     }
    //     if(listOfDictionaries.length <= 0){
    //         console.warn("listofDictionaries is empty");
    //     }
    //     if(pnmResults.length <= 0){
    //         console.warn("pnm results is empty");
    //     }
    //   }, [bumpGroups, listOfDictionaries]);
      

    // useEffect(() => {
        
        // const calculatePercent = (detailedBumpGroups, pnmDictionaries) => {
        //     const pnmCompatibility = {};
        //     pnmDictionaries.forEach(pnm => {
        //       pnmCompatibility[pnm['PNM number']] = Array(Object.keys(bumpGroups).length).fill(0);
        //     });
          
    //         Object.keys(detailedBumpGroups).forEach((bumpKey, bumpGroupIndex) => {
    //           const bumpGroupMembers = bumpGroups[bumpKey];
              
    //           // Check if bumpGroupMembers exists and has items
    //           if (!Array.isArray(bumpGroupMembers) || bumpGroupMembers.length === 0) {
    //             console.warn(`No members found for bump group ${bumpKey}`);
    //             return;
    //           }
          
    //           bumpGroupMembers.forEach(member => {
    //             // Assuming member is an object with surveyData property
    //             if (!member.surveyData || !member.surveyData.State) {
    //               console.warn('Member data not available');
    //               return;
    //             }
                
    //             const locationTotal = location(member, pnmDictionaries.find(dict => dict.FirstName === member.surveyData.FirstName && dict.LastName === member.surveyData.LastName));
    //             const majorTotal = major(member.surveyData.Major, pnmDictionaries.find(dict => dict.FirstName === member.surveyData.FirstName && dict.LastName === member.surveyData.LastName)?.Major || '');
    //             const interestsTotal = interests(member.surveyData.Activities, pnmDictionaries.find(dict => dict.FirstName === member.surveyData.FirstName && dict.LastName === member.surveyData.LastName)?.Activities || []);
    //             const involvementTotal = involvement(member.surveyData.Involvement, pnmDictionaries.find(dict => dict.FirstName === member.surveyData.FirstName && dict.LastName === member.surveyData.LastName)?.Involvement || []);
          
    //             const bumpGroupTotal = ((locationTotal + majorTotal + interestsTotal + involvementTotal) / (16 * bumpGroupMembers.length)) * 100;
          
    //             pnmCompatibility[pnmDictionaries.find(dict => dict.FirstName === member.surveyData.FirstName && dict.LastName === member.surveyData.LastName)['PNM number']][bumpGroupIndex] = Math.round(bumpGroupTotal);
    //           });
    //         });
          
    //         return pnmCompatibility;
    //       };
          
          

    //     const location = (member, pnm) => {
    //         if (member.State === pnm.State && member.County === pnm.County && member.Hometown === pnm.Hometown) {
    //             return 5;
    //         } else if (member.State === pnm.State && member.County === pnm.County) {
    //             return (5 / 3) * 2;
    //         } else if (member.State === pnm.State) {
    //             return 5 / 3;
    //         } else {
    //             return 0;
    //         }
    //     };
    
    //     const major = (memberMajors, pnmMajors) => {
    //         if (!Array.isArray(pnmMajors)) {
    //             return 0; // Return 0 if pnmInvs is not an array
    //         }
    //         return pnmMajors.some(pnmMajor => memberMajors.includes(pnmMajor)) ? 4 : 0;
    //     };
    
    //     const interests = (memberInts, pnmInts) => {
    //         if (!Array.isArray(pnmInts)) {
    //             return 0; // Return 0 if pnmInvs is not an array
    //         }
    //         return pnmInts.filter(pnmInt => memberInts.includes(pnmInt)).length;
    //     };
    
    //     const involvement = (memberInvs, pnmInvs) => {
    //         if (!Array.isArray(pnmInvs)) {
    //             return 0; // Return 0 if pnmInvs is not an array
    //         }
    //         return pnmInvs.reduce((score, pnmInv) => {
    //             return memberInvs.includes(pnmInv) ? score + (4 / 3) : score;
    //         }, 0);
    //     };
    
    //     const match = (pnmPercents) => {
    //         const finalMatches = {};
    //         for (let j = 1; j <= 20; j++) {
    //             finalMatches[j] = [];
    //         }
    
    //         for (let i = 100; i >= 0; i--) {
    //             for (const [pnm, percentList] of Object.entries(pnmPercents)) {
    //                 percentList.forEach((percent, index) => {
    //                     if (percent === i && finalMatches[index + 1].length < 5) {
    //                         finalMatches[index + 1].push({ [pnm]: `${percent}%` });
    //                         pnmPercents[pnm] = [];
    //                     }
    //                 });
    //             }
    //         }
    
    //         return finalMatches;
    //     };
    
    //     const createMatches = () => {
    //         const pnmPercents = calculatePercent(detailedBumpGroups, pnmDictionaries);
    //         const finalMatches = match(pnmPercents);
    
    //         console.log("Final Matches:", finalMatches);
    //         setMatches(finalMatches);
    //     };
    
    //     if (detailedBumpGroups && pnmDictionaries.length > 0) {
    //         createMatches();
    //     }
    // }, [detailedBumpGroups, pnmDictionaries]);

    const handleClick = () => {
        console.log('Button clicked!');

        // this if statement formats member data
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
            console.log("PARSED MEMBERS FOR FOR ALG:", listOfDictionaries);

            setListOfDictionaries(listOfDictionaries); // MAYBE REMOVE
        }

        // this if statement formats pnm data
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
            console.log("PARSED PNMs FOR ALG:", pnmDictionaries);
            setPNMDictionary(pnmDictionaries);
        }

        // this if statement creates the appropriate bump groups
        if (bumpGroupResults.length > 0) {
            const bumpGroups = {};
        
            // Loop through each result
            bumpGroupResults.forEach(result => {
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

          // this if statement extracts the size of bump groups for PNMs ONLY
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

        // use effect would potentially start here

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

        const calculatePercent = (detailedBumpGroups, pnmDictionaries) => {
            const pnmCompatibility = {};
            pnmDictionaries.forEach(pnm => {
              pnmCompatibility[pnm['PNM number']] = Array(Object.keys(detailedBumpGroups).length).fill(0);
            }); 
            console.log("Bump Groups with details:", detailedBumpGroups);
            console.log("PNM compatibility:", pnmCompatibility);
        }
        calculatePercent(detailedBumpGroups, pnmDictionaries);
      };
    

    return (
        <div className="AboutUs">
            <h1>View Results</h1>
            <button onClick={handleClick}>Click Me</button>
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