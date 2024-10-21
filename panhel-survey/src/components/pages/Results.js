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
   const [bumpGroups, setBumpGroups] = useState({}); //holds the bump group data
   
    const [selectedIndex, setSelectedIndex] = useState(null); //variable used to control who is being clicked for their survey results
    const [displayNames, setDisplayNames] = useState([]); //holds an array with the name and whether they submmited the survey or not in the form of true/false
    const [selectedResult, setSelectedResult] = useState(null); //used to hold the data from the selected person
    const [openGroups, setOpenGroups] = useState({});

    const handleListItemClick = (name) => {
        setSelectedResult(name);
        setSelectedIndex(name);
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
          BumpGroupResults.forEach(result => {
            Object.keys(result.surveyData).forEach(bumpKey => {
              if (bumpKey.startsWith("Bump")) {
                const bumpGroup = result.surveyData[bumpKey];
                const bumpGroupValues = Object.values(bumpGroup);
              if (bumpGroups[bumpKey]) {
                  bumpGroups[bumpKey] = bumpGroups[bumpKey].concat(bumpGroupValues);
                } else {
                  bumpGroups[bumpKey] = bumpGroupValues;
                }
              }
            });
          });
          console.log("Bump Groups Dictionary:", bumpGroups);
          setBumpGroups(bumpGroups);
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
                    <pre>{JSON.stringify(selectedResult, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default Results;