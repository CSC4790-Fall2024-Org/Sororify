const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const bcrypt = require('bcryptjs');
const User = require('./models/User');

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
// Sign-In Endpoint
app.post('/api/auth/signin', async (req, res) => {
    const { username, email, password } = req.body;
    console.log('Sign in request received:', { username, email, password }); // Debugging statement
  
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ success: false, message: 'Invalid email or password' });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ success: false, message: 'Invalid email or password' });
      }
      console.log('Sign in successful for user:', username);
      res.json({ success: true, message: 'Sign in successful' });
    } catch (error) {
      console.error('Error during sign in:', error);
      res.status(500).json({ success: false, message: 'Server error, please try again later' });
    }
  });

// Sign-Up Endpoint
app.post('/api/auth/signup', async (req, res) => {
    const { username, email, password, role } = req.body;
  
    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ success: false, message: 'Email already in use' });
      }
  
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      const newUser = new User({
        username,
        email,
        password: hashedPassword,
        role
      });
  
      await newUser.save();
      res.status(201).json({ success: true, message: 'User registered successfully' });
    } catch (error) {
      console.error('Error during sign up:', error);
      res.status(500).json({ success: false, message: 'Server error, please try again later' });
    }
  });

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
// app.get('/api/survey-results', async (req, res) => {
//     const { surveyType } = req.query;  // Get the survey type from the route parameters
//     console.log('Fetching results for survey type:', surveyType);

//     try {
//         const SurveyResult = getSurveyModel(surveyType);
//         const results = await SurveyResult.find({});  // Fetch only surveys with the matching type
//         res.json(results);  // Send the filtered results as a JSON response
//         console.log('responses:', results);
//     } catch (err) {
//         res.status(500).json({ error: 'Failed to fetch survey results' });
//     }
// });
app.get('/api/survey-results', async (req, res) => {
  const { surveyType, email, pin } = req.query;  // Get the survey type, email, and pin from the query parameters
  console.log('Fetching results for survey type:', surveyType);

  try {
      const SurveyResult = getSurveyModel(surveyType);

      // Log the email and pin before the if statement
      console.log('Received email:', email);
      console.log('Received pin:', pin);

      // If email and pin are provided, perform PIN verification
      if (email && pin) {
        console.log('Verifying PIN for email:', email);
        const surveyResult = await SurveyResult.findOne({ email, pin });
        console.log('Query result:', surveyResult); // Log the query result

        if (!surveyResult) {
            return res.status(404).json({ valid: false, message: 'Survey result not found or invalid PIN' });
        }

        // If the survey result is found, the PIN is valid
        return res.status(200).json({ valid: true, message: 'PIN verification successful' });
    }

      // If email and pin are not provided, fetch all survey results for the given survey type
      const results = await SurveyResult.find({});  // Fetch only surveys with the matching type
      res.json(results);  // Send the filtered results as a JSON response
      console.log('responses:', results);
  } catch (err) {
      console.error('Error fetching survey results:', err);
      res.status(500).json({ error: 'Failed to fetch survey results' });
  }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
