import React, {useState} from 'react';
import { Survey } from 'survey-react-ui';
import { Model } from 'survey-core';
import Button from '@mui/material/Button';
import axios from 'axios';
import './InfoPage.css';

const chapterInfoSurvey = {
    "title": "Chapter Information",
    "description": " ",
    "logoPosition": "right",
    "pages": [
     {
      "name": "page1",
      "elements": [
       {
        "type": "rating",
        "name": "question1",
        "title": "Approximately how many girls are in your bump groups?"
       },
       {
        "type": "comment",
        "name": "question2",
        "title": "Enter the name of the girls that will be recruiting in the sisterhood round separating each name on a new line"
       }
      ]
     }
    ]
   }


function InfoPage() {
    const chapterInfo= new Model(chapterInfoSurvey);
    const [surveyResults, setSurveyResults] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(null); // State to track selected person

    chapterInfo.applyTheme(
        {
            "backgroundImage": "",
            "backgroundImageFit": "cover",
            "backgroundImageAttachment": "scroll",
            "backgroundOpacity": 1,
            "header": {
                "height": 50,
                "inheritWidthFrom": "container",
                "textAreaWidth": 503,
                "overlapEnabled": false,
                "backgroundImageOpacity": 1,
                "backgroundImageFit": "cover",
                "logoPositionX": "right",
                "logoPositionY": "top",
                "titlePositionX": "center",
                "titlePositionY": "middle",
                "descriptionPositionX": "left",
                "descriptionPositionY": "bottom"
            },
            "themeName": "default",
            "colorPalette": "light",
            "isPanelless": false,
            "cssVariables": {
                "--sjs-general-backcolor": "rgba(255, 255, 255, 1)",
                "--sjs-general-backcolor-dark": "rgba(248, 248, 248, 1)",
                "--sjs-general-backcolor-dim": "#fdf7fc",
                "--sjs-general-backcolor-dim-light": "rgba(249, 249, 249, 1)",
                "--sjs-general-backcolor-dim-dark": "rgba(243, 243, 243, 1)",
                "--sjs-general-forecolor": "rgba(0, 0, 0, 0.91)",
                "--sjs-general-forecolor-light": "rgba(0, 0, 0, 0.45)",
                "--sjs-general-dim-forecolor": "rgba(0, 0, 0, 0.91)",
                "--sjs-general-dim-forecolor-light": "rgba(0, 0, 0, 0.45)",
                "--sjs-primary-backcolor": "#f94ea0",
                "--sjs-primary-backcolor-light": "rgba(NaN, NaN, NaN, 0.1)",
                "--sjs-primary-backcolor-dark": "rgba(NaN, NaN, NaN, 1)",
                "--sjs-primary-forecolor": "rgba(255, 255, 255, 1)",
                "--sjs-primary-forecolor-light": "rgba(255, 255, 255, 0.25)",
                "--sjs-base-unit": "8px",
                "--sjs-corner-radius": "4px",
                "--sjs-secondary-backcolor": "rgba(255, 152, 20, 1)",
                "--sjs-secondary-backcolor-light": "rgba(255, 152, 20, 0.1)",
                "--sjs-secondary-backcolor-semi-light": "rgba(255, 152, 20, 0.25)",
                "--sjs-secondary-forecolor": "rgba(255, 255, 255, 1)",
                "--sjs-secondary-forecolor-light": "rgba(255, 255, 255, 0.25)",
                "--sjs-shadow-small": "0px 1px 2px 0px rgba(0, 0, 0, 0.15)",
                "--sjs-shadow-small-reset": "0px 0px 0px 0px rgba(0, 0, 0, 0.15)",
                "--sjs-shadow-medium": "0px 2px 6px 0px rgba(0, 0, 0, 0.1)",
                "--sjs-shadow-large": "0px 8px 16px 0px rgba(0, 0, 0, 0.1)",
                "--sjs-shadow-inner": "inset 0px 1px 2px 0px rgba(0, 0, 0, 0.15)",
                "--sjs-shadow-inner-reset": "inset 0px 0px 0px 0px rgba(0, 0, 0, 0.15)",
                "--sjs-border-light": "rgba(0, 0, 0, 0.09)",
                "--sjs-border-default": "rgba(0, 0, 0, 0.16)",
                "--sjs-border-inside": "rgba(0, 0, 0, 0.16)",
                "--sjs-special-red": "rgba(229, 10, 62, 1)",
                "--sjs-special-red-light": "rgba(229, 10, 62, 0.1)",
                "--sjs-special-red-forecolor": "rgba(255, 255, 255, 1)",
                "--sjs-special-green": "rgba(25, 179, 148, 1)",
                "--sjs-special-green-light": "rgba(25, 179, 148, 0.1)",
                "--sjs-special-green-forecolor": "rgba(255, 255, 255, 1)",
                "--sjs-special-blue": "rgba(67, 127, 217, 1)",
                "--sjs-special-blue-light": "rgba(67, 127, 217, 0.1)",
                "--sjs-special-blue-forecolor": "rgba(255, 255, 255, 1)",
                "--sjs-special-yellow": "rgba(255, 152, 20, 1)",
                "--sjs-special-yellow-light": "rgba(255, 152, 20, 0.1)",
                "--sjs-special-yellow-forecolor": "rgba(255, 255, 255, 1)",
                "--sjs-article-font-xx-large-textDecoration": "none",
                "--sjs-article-font-xx-large-fontWeight": "700",
                "--sjs-article-font-xx-large-fontStyle": "normal",
                "--sjs-article-font-xx-large-fontStretch": "normal",
                "--sjs-article-font-xx-large-letterSpacing": "0",
                "--sjs-article-font-xx-large-lineHeight": "64px",
                "--sjs-article-font-xx-large-paragraphIndent": "0px",
                "--sjs-article-font-xx-large-textCase": "none",
                "--sjs-article-font-x-large-textDecoration": "none",
                "--sjs-article-font-x-large-fontWeight": "700",
                "--sjs-article-font-x-large-fontStyle": "normal",
                "--sjs-article-font-x-large-fontStretch": "normal",
                "--sjs-article-font-x-large-letterSpacing": "0",
                "--sjs-article-font-x-large-lineHeight": "56px",
                "--sjs-article-font-x-large-paragraphIndent": "0px",
                "--sjs-article-font-x-large-textCase": "none",
                "--sjs-article-font-large-textDecoration": "none",
                "--sjs-article-font-large-fontWeight": "700",
                "--sjs-article-font-large-fontStyle": "normal",
                "--sjs-article-font-large-fontStretch": "normal",
                "--sjs-article-font-large-letterSpacing": "0",
                "--sjs-article-font-large-lineHeight": "40px",
                "--sjs-article-font-large-paragraphIndent": "0px",
                "--sjs-article-font-large-textCase": "none",
                "--sjs-article-font-medium-textDecoration": "none",
                "--sjs-article-font-medium-fontWeight": "700",
                "--sjs-article-font-medium-fontStyle": "normal",
                "--sjs-article-font-medium-fontStretch": "normal",
                "--sjs-article-font-medium-letterSpacing": "0",
                "--sjs-article-font-medium-lineHeight": "32px",
                "--sjs-article-font-medium-paragraphIndent": "0px",
                "--sjs-article-font-medium-textCase": "none",
                "--sjs-article-font-default-textDecoration": "none",
                "--sjs-article-font-default-fontWeight": "400",
                "--sjs-article-font-default-fontStyle": "normal",
                "--sjs-article-font-default-fontStretch": "normal",
                "--sjs-article-font-default-letterSpacing": "0",
                "--sjs-article-font-default-lineHeight": "28px",
                "--sjs-article-font-default-paragraphIndent": "0px",
                "--sjs-article-font-default-textCase": "none",
                "--sjs-font-family": "Open Sans",
                "--sjs-font-surveytitle-size": "37px",
                "--sjs-header-backcolor": "transparent",
                "--sjs-font-headertitle-color": "rgba(249, 78, 160, 1)",
                "--sjs-font-headertitle-weight": "400",
                "--sjs-font-headertitle-size": "29px",
                "--sjs-font-headertitle-family": "Courier New, monospace"
            },
            "headerView": "advanced"
        }
    );

    chapterInfo.onComplete.add(() => {
        axios.get('http://localhost:5000/api/survey-results?surveyType=DG Survey')
            .then((response) => {
                setSurveyResults(response.data);  // Update the state with fetched results
                console.log('DG Survey results fetched:', response.data);
            })
            .catch((error) => {
                console.error('Error fetching DG Survey results:', error);
            });
    });

    return (
        <div>
            <Survey model={chapterInfo} />

            {surveyResults.length > 0 ? (
                <div style={{ marginBottom: "20px" }}>
                    <h3>All PNM Matches</h3>
                    <ul style={{ listStyleType: "none", padding: 0 }}>
                        {surveyResults.map((result, index) => (
                            <li key={index}>
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
                <p>No survey results available.</p>
            )}

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
}



export default InfoPage;