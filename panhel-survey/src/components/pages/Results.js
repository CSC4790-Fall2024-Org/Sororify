import React, {useState} from 'react';
import axios from 'axios';
import './AboutUs.css';
import Button from '@mui/material/Button';




const Results = () => {
    const [surveyResults, setSurveyResults] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(null);

    const handleButtonClick = () => {
        axios.get('http://localhost:5000/api/survey-results?surveyType=DG Survey')
            .then((response) => {
                setSurveyResults(response.data);  // Update the state with fetched results
                console.log('DG Survey results fetched:', response.data);
            })
            .catch((error) => {
                console.error('Error fetching DG Survey results:', error);
            });
    };


    return (
        <div className = "AboutUs">
            <h1>View Results</h1>

            <Button 
                variant="contained" 
                style={{
                    backgroundColor: '#F94EA0',
                    color: '#fff',
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#D43B8E'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#F94EA0'}
                onClick={handleButtonClick}
          > Get Results! 
            </Button>
            {surveyResults.length > 0 ? (
                <div style={{ marginBottom: "20px" }}>
                    <h3>All PNM Matches</h3>
                    <ul style={{ listStyleType: "none", padding: 0 }}>
                        {surveyResults.map((result, index) => (
                            <li key={index}>
                                {result.surveyData["First Name"]} {result.surveyData["Last Name"]}
                                <span
                                    onClick={() => setSelectedIndex(selectedIndex === index ? null : index)} // Toggle selected index
                                    style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}
                                >
                                    {result.surveyData["First Name"]} {result.surveyData["Last Name"]}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p> . </p>
            )}
             <div>
                {surveyResults.length > 0 ? (
                    <ul style={{ listStyleType: "none", padding: 0 }}>
                        {surveyResults.map((result, index) => (
                            <li key={index} style={{ marginBottom: "20px", border: "1px solid #ccc", padding: "15px", borderRadius: "5px" }}>
                                <h3>Detailed PNM Match {index + 1}</h3>
                                <p><strong>First Name:</strong> {result.surveyData["First Name"]}</p>
                                <p><strong>Last Name:</strong> {result.surveyData["Last Name"]}</p>
                                <p><strong>State:</strong> {result.surveyData["State"]}</p>
                                <p>
                                    <strong>County:</strong> {
                                        Object.keys(result.surveyData).find(key => key.endsWith("Counties"))
                                            ? result.surveyData[Object.keys(result.surveyData).find(key => key.endsWith("Counties"))]
                                            : "N/A"
                                    }
                                </p>
                                <p><strong>Hometown:</strong> {result.surveyData["Hometown"]}</p>
                                <p><strong>Major:</strong> {result.surveyData["Major"].join(", ")}</p>
                                <p><strong>Involvement:</strong> {result.surveyData["Involvement"].join(", ")}</p>
                                <p><strong>Activities:</strong> {result.surveyData["Activities"].join(", ")}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p> !.</p>
                )}
            </div>
            {selectedIndex !== null && surveyResults[selectedIndex] && ( // Check if there's a selected index
                <div style={{ marginTop: "20px", border: "1px solid #ccc", padding: "15px", borderRadius: "5px" }}>
                    <h3>Detailed PNM Match</h3>
                    <p><strong>First Name:</strong> {surveyResults[selectedIndex].surveyData["First Name"]}</p>
                    <p><strong>Last Name:</strong> {surveyResults[selectedIndex].surveyData["Last Name"]}</p>
                    <p><strong>State:</strong> {surveyResults[selectedIndex].surveyData["State"]}</p>
                    <p>
                        <strong>County:</strong> {
                            Object.keys(surveyResults[selectedIndex].surveyData).find(key => key.endsWith("Counties"))
                                ? surveyResults[selectedIndex].surveyData[Object.keys(surveyResults[selectedIndex].surveyData).find(key => key.endsWith("Counties"))]
                                : "N/A"
                        }
                    </p>
                    <p><strong>Hometown:</strong> {surveyResults[selectedIndex].surveyData["Hometown"]}</p>
                    <p><strong>Major:</strong> {surveyResults[selectedIndex].surveyData["Major"].join(", ")}</p>
                    <p><strong>Involvement:</strong> {surveyResults[selectedIndex].surveyData["Involvement"].join(", ")}</p>
                    <p><strong>Activities:</strong> {surveyResults[selectedIndex].surveyData["Activities"].join(", ")}</p>
                </div>
            )}
        </div>
    );
};

export default Results;