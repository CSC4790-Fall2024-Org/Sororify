const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

// Define a common schema for survey results
const surveyResultSchema = new mongoose.Schema({
    surveyType: { type: String, required: true },  // The type of member (e.g., DG Survey, AXO Survey, etc.)
    surveyData: { type: Object, required: true },  // The actual survey responses
    createdAt: { type: Date, default: Date.now }
});

// Function to dynamically get or create a model for the specific collection
function getSurveyModel(surveyType) {
    // Convert surveyType like "DG Survey" to a collection-friendly name "DGSurveyResults"
    const collectionName = surveyType.replace(/\s+/g, '') + 'Results';  // e.g., "DG Survey" becomes "DGSurveyResults"
    
    // Check if the model already exists to prevent re-registering the same model
    return mongoose.models[collectionName] || mongoose.model(collectionName, surveyResultSchema, collectionName);
}

// API Endpoint to save survey results
app.post('/api/survey-results', (req, res) => {
    const { surveyType, surveyData } = req.body;

    // Dynamically get or create the model for the specific collection
    const SurveyResult = getSurveyModel(surveyType);

    const newSurveyResult = new SurveyResult({
        surveyType,  // Store the full survey type (like "DG Survey", "AXO Survey")
        surveyData   // Store the survey data
    });

    // Save the result in the corresponding collection
    newSurveyResult.save()
        .then(result => res.status(201).json(result))
        .catch(err => {
            console.error('Error saving survey result:', err);
            res.status(400).json('Error: ' + err);
        });
});

//get request for survey results
app.get('/api/survey-results', async (req, res) => {
    const { surveyType } = req.query;  // Get the survey type from the route parameters
    console.log('Fetching results for survey type:', surveyType);

    try {
        const SurveyResult = getSurveyModel(surveyType);
        const results = await SurveyResult.find({});  // Fetch only surveys with the matching type
        res.json(results);  // Send the filtered results as a JSON response
        console.log('responses:', results);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch survey results' });
    }
});


// Start the server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
