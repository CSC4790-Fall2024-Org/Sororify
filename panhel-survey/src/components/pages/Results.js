import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AboutUs.css';
import Button from '@mui/material/Button';
import DoneIcon from '@mui/icons-material/Done';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';

const Results = () => {
    const [chapterResults, setChapterResults] = useState([]);
    const [expectedResults, setExpectedResults] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [displayNames, setDisplayNames] = useState([]);

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

    useEffect(() => {
        axios.get('http://localhost:5000/api/survey-results?surveyType=DG Survey')
            .then((response) => {
                setChapterResults(response.data);  // Update the state with fetched results
                console.log('DG Survey results fetched:', response.data);
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
                    <ListItem key={index} className="results-list-item">
                        <ListItemText primary={item.name} />
                        {item.isInNamesOnly && (
                            <ListItemIcon>
                                <DoneIcon />
                            </ListItemIcon>
                        )}
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default Results;