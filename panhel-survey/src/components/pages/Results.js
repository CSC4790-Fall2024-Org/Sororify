import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AboutUs.css';
import DoneIcon from '@mui/icons-material/Done';
import { List, ListItemButton, ListItemText, ListItemIcon, Collapse } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';


const Results = () => {
    const [pnmResults, setPNMResults] = useState([]); //RAW PNM SURVEYS RESULTS
    const [chapterResults, setChapterResults] = useState([]); //RAW CHAPTER SURVEY RESULTS
    const [BumpGroupResults, setBumpGroupResults] = useState([]); //RAW BUMP GROUP SURVEY RESULTS
   
    const [selectedIndex, setSelectedIndex] = useState(null); //variable used to control who is being clicked for their survey results
    const [displayNames, setDisplayNames] = useState([]); //holds an array with the name and whether they submmited the survey or not in the form of true/false
    const [selectedResult, setSelectedResult] = useState(null); //used to hold the data from the selected person
    const [openGroups, setOpenGroups] = useState({});

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
          BumpGroupResults.forEach(result => { //iterate over reach result in bump group results 
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
        if (chapterResults.length > 0 && BumpGroupResults.length > 0) { // If both chapterResults and BumpGroupResults are populated
            const namesOnly = extractNames(chapterResults);
            console.log('Names only:', namesOnly);

            const bumpGroups = BumpGroupResults.map(result => extractBumpNames(result));
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
    }, [chapterResults, BumpGroupResults]);

    

    return (
        <div className="AboutUs">
            <h1>View Results</h1>
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
            {selectedResult && (
                <div className="selected-result">
                    <h2>Selected Result</h2>
                   <pre>{selectedResult}</pre>
                </div>
            )}
        </div>
    );
};

export default Results;