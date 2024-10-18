import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AboutUs.css';
import DoneIcon from '@mui/icons-material/Done';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';

const Results = () => {
    const [chapterResults, setChapterResults] = useState([]); //array populated with chapter survey results on render
    const [expectedResults, setExpectedResults] = useState([]); //array populated with bump group survey results on render
    const [pnmInfo, setPNMInfo] = useState([]); //array populated with PNM survey results on render
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [displayNames, setDisplayNames] = useState([]);
    const [selectedResult, setSelectedResult] = useState(null);

    useEffect(() => {  // Fetch the survey results on component load
        axios.get('http://localhost:5000/api/survey-results?surveyType=KD Survey')
            .then((response) => {
                setChapterResults(response.data);  // Update the state with fetched results
                console.log('KD Survey results fetched:', response.data);
            })
            .catch((error) => {
                console.error('Error fetching DG Survey results:', error);
            });
    }, []);  // Empty dependency array ensures this runs once on component load


    useEffect(() => { // Fetch the survey results on component load
        axios.get('http://localhost:5000/api/survey-results?surveyType=Info Page')
            .then((response) => {
                setExpectedResults(response.data);  // Update the state with fetched results
                console.log('Info Page survey results fetched:', response.data);
            })
            .catch((error) => {
                console.error('Error fetching Info Page survey results:', error);
            });
    }, []);
    useEffect(() => { // Fetch the survey results on component load
        axios.get('http://localhost:5000/api/survey-results?surveyType=PNM Survey')
            .then((response) => {
                setPNMInfo(response.data);  // Update the state with fetched results
                console.log('PNM Info:', response.data);
            })
            .catch((error) => {
                console.error('Error fetching Info Page survey results:', error);
            });
    }, []);


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

    useEffect(() => {
        if (chapterResults.length > 0 && expectedResults.length > 0) { //if both chapterResults and expectedResults are populated
            const namesOnly = extractNames(chapterResults); //extract names from Chapter Members info
            console.log('Names only:', namesOnly);

            const bumpNames = expectedResults.flatMap(result => extractBumpNames(result)); //flatMap combines all the arrays of bump group into one array
            console.log('Bump Names:', bumpNames);

            const comparedNames = bumpNames.map(name => ({ //compares the names from the bump groups to the names from the chapter members
                name,
                isInNamesOnly: namesOnly.includes(name)
            }));

            console.log('Compared Names:', comparedNames);
            setDisplayNames(comparedNames);
        }
    }, [chapterResults, expectedResults]); //This will run anytime there is a change to chapterResults or expectedResults (once they are populated in the first useEffects)


    const handleListItemClick = (name) => { //this method is used to fetch the data associated with the name clicked
        setSelectedIndex(name);
        const [firstName, lastName] = name.split(' ');
        const result = chapterResults.find(result => {
            return result.surveyData["First Name"] === firstName && result.surveyData["Last Name"] === lastName;
        });
        setSelectedResult(result);
    };


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
            // Set the list of dictionaries in a state if you need to use it later
            // setSomeState(listOfDictionaries);
        }
    }, [chapterResults]);  // Runs every time chapterResults is updated
    





    return (
        <div className="AboutUs">
            <h1>View Results</h1>
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