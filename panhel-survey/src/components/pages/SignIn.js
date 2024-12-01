import { useState, useContext } from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Divider from '@mui/material/Divider';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import { GoogleIcon, FacebookIcon, SitemarkIcon } from './CustomIcons';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import getSignUpTheme from './getSignUpTheme';
import axios from 'axios';
import { AuthContext } from './AuthContext';
import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 'auto',
  [theme.breakpoints.up('sm')]: {
    maxWidth: '450px',
  },
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  ...theme.applyStyles('dark', {
    boxShadow:
      'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
}));

const SignInContainer = styled(Stack)(({ theme }) => ({
  height: 'calc((1 - var(--template-frame-height, 0)) * 100dvh)',
  minHeight: '100%',
  padding: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4),
  },
  '&::before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    zIndex: -1,
    inset: 0,
    backgroundImage:
      'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
    backgroundRepeat: 'no-repeat',
    ...theme.applyStyles('dark', {
      backgroundImage:
        'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
    }),
  },
}));

const SignIn = () =>{
  const [mode, setMode] = React.useState('light');
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [showCustomTheme, setShowCustomTheme] = React.useState(true);
  const defaultTheme = createTheme({ palette: { mode } });
  const SignUpTheme = createTheme(getSignUpTheme(mode));
  const { user, signIn } = useContext(AuthContext);
  const [successMessage, setSuccessMessage] = useState(''); // State variable for success message
  const navigate = useNavigate(); // Get the navigate function
  const [pin, setPin] = useState('');
  const [pinError, setPinError] = useState(false);
  const [pinErrorMessage, setPinErrorMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');



  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const validateInputs = () => {
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const username = document.getElementById('username');

    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage('Please enter a valid email address.');
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage('');
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage('Password must be at least 6 characters long.');
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage('');
    }

    return isValid;
  };
  
  const handlePinChange = (event) => {
    const pin = event.target.value;
    // Update the state or perform any other necessary actions with the pin value
    console.log('PIN changed:', pin); // Debugging statement
    // Assuming you have a state variable for the pin, you can update it like this:
    setPin(pin);
  };

  const verifyUsernameAndPassword = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:8000/api/auth/signin/', { email, password });
      return response.data.success;
    } catch (error) {
      console.error('Error verifying username and password:', error);
      return false;
    }
  };
  
  const verifyMemberPin = async (email, pin) => {
    console.log('verifyMemberPin called with email:', email, 'and pin:', pin); // Debugging statement
    const params = {
      surveyType: 'Admin Survey',
      email: email,
      pin: pin
    };
    console.log('Request params:', params); // Log the params object
    try {
      const response = await axios.get('http://localhost:5000/api/survey-results', { params });
      console.log('Response from server:', response); // Log the entire response object


      if (response.data.length > 0) {
        console.log('PIN verification successful for email:', email); // Debugging statement
        return true; // Return true if the PIN verification is successful
      } else {
        console.log('Incorrect Pin'); // Print Incorrect Pin if no match is found
        return false; // Return false if the PIN verification fails
      }
    } catch (error) {
      console.error('Error verifying member PIN:', error);
      return false; // Return false if there is an error during the request
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
  
    if (emailError || passwordError) {
      return;
    }
    const form = event.currentTarget;
    console.log('Form submitted'); // Debugging statement
    const data = new FormData(form);
    const email = data.get('email');
    const username = data.get('username');
    const password = data.get('password');
    const role = data.get('role');
    const chapter = data.get('chapter');
    console.log('Form data:', { username, email, password, role, chapter }); // Debugging statement

    let memberPin = null;

    const isCredentialsValid = await verifyUsernameAndPassword(email, password);
    if (!isCredentialsValid) {
      setErrorMessage('Invalid username or password');
      return; // Prevent form submission if username or password is invalid
    }
  
    // Store PIN only for members
    // if (role === 'member') {
    //   memberPin = pin;
    //   console.log('Member PIN stored:', memberPin);
    memberPin = pin;
    if(memberPin !== null && role !== 'pnm') {
      console.log('Member PIN stored:', memberPin);
      const isPinValid = await verifyMemberPin(email, memberPin);
      if (!isPinValid) {
        setErrorMessage('Invalid email or PIN');
        return; // Prevent form submission if email or PIN is invalid
      }
  }

    
    try {
      console.log('Sending request to server...'); // Debugging statement
      const response = await axios.post('http://localhost:8000/api/auth/signin/', { username, email, password, role, chapter });
      console.log('Server response:', response.data); // Debugging statement
      if (response.data.success) {
        // Handle successful sign in
        console.log('Sign in successful');
        const userData = { email, role: response.data.role, username: response.data.username, chapter: response.data.chapter }; // Replace with actual user data fetching logic
        setSuccessMessage('Sign in successful'); // Update success message
        signIn(userData, response.data.token);
        navigate('/'); // Redirect to the About Us page
      } else {
        // Handle sign in error
        console.log('Sign in unsuccessful');
        setEmailError(true);
        setEmailErrorMessage(response.data.message);
      }
    } catch (error) {
      // Handle server error
      console.error('Error during sign in:', error); // Debugging statement
      setErrorMessage('Error sending request to server. Please try again.');
    }
  };

    
  //   try {
  //     console.log('Sending request to server...'); // Debugging statement
  //     const response = await axios.post('http://localhost:8000/api/auth/signin/', { email, password, role, chapter});
  //     console.log('Server response:', response.data); // Debugging statement
  //     if (response.data.success) {
  //       // Handle successful sign in
  //       console.log('Sign in successful');
  //       const userData = { email, role: response.data.role, username: response.data.username, chapter: response.data.chapter }; // Replace with actual user data fetching logic
  //       setSuccessMessage('Sign in successful'); // Update success message
  //       signIn(userData, response.data.token);
  //       navigate('/'); // Redirect to the About Us page
  //     } else {
  //       // Handle sign in error
  //       console.log('Sign in unsuccessful');
  //       setEmailError(true);
  //       setEmailErrorMessage(response.data.message);
  //     }
  //   } catch (error) {
  //     // Handle server error
  //     console.error('Error during sign in:', error); // Debugging statement
  //     if (error.response) {
  //       console.error('Server responded with an error:', error.response.data); // Debugging statement
  //     } else if (error.request) {
  //       console.error('No response received from server:', error.request); // Debugging statement
  //     } else {
  //       console.error('Error setting up the request:', error.message); // Debugging statement
  //     }
  //     setEmailError(true);
  //     setEmailErrorMessage('No account found with the provided email and password.');
  //   }
  // };

  if (user) {
    return <div>{user.username} is logged in</div>;
  }

  return (
    <ThemeProvider theme={showCustomTheme ? SignUpTheme : defaultTheme}>
      <CssBaseline enableColorScheme />
      <SignInContainer direction="column" justifyContent="space-between">
        <Card variant="outlined">
          <SitemarkIcon />
          <Typography
            component="h1"
            variant="h4"
            sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
          >
            Sign in
          </Typography>
          {successMessage && (
            <Typography variant="body1" color="success.main">
              {successMessage}
            </Typography> )}
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              gap: 2,
            }}
          >
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <TextField
                error={emailError}
                helperText={emailErrorMessage}
                id="email"
                type="email"
                name="email"
                placeholder="your@email.com"
                autoComplete="email"
                autoFocus
                required
                fullWidth
                variant="outlined"
                color={emailError ? 'error' : 'primary'}
                sx={{ ariaLabel: 'email' }}
              />
            </FormControl>
            <FormControl>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Link
                  component="button"
                  type="button"
                  onClick={handleClickOpen}
                  variant="body2"
                  sx={{ alignSelf: 'baseline' }}
                >
                  Forgot your password?
                </Link>
              </Box>
              <TextField
                error={passwordError}
                helperText={passwordErrorMessage}
                name="password"
                placeholder="••••••"
                type="password"
                id="password"
                autoComplete="current-password"
                autoFocus
                required
                fullWidth
                variant="outlined"
                color={passwordError ? 'error' : 'primary'}
              />
              <FormLabel htmlFor="pin">Pin (For current chapter Members and Admins) </FormLabel>
              <TextField
                error={pinError}
                helperText={pinErrorMessage}
                name="pin"
                placeholder="Enter 4-digit PIN"
                type="text"
                id="pin"
                inputProps={{ maxLength: 4 }}
                required
                fullWidth
                variant="outlined"
                color={pinError ? 'error' : 'primary'}
                onChange={handlePinChange}
              />
            </FormControl>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={validateInputs}
            >
              Sign in
            </Button>
            {successMessage && <p>{successMessage}</p>}
            {errorMessage && <p>{errorMessage}</p>}
            <Typography sx={{ textAlign: 'center' }}>
              Don&apos;t have an account?{' '}
              <span>
                <Link
                  href="/SignUp/"
                  variant="body2"
                  sx={{ alignSelf: 'center' }}
                >
                  Sign up
                </Link>
              </span>
            </Typography>
          </Box>
        </Card>
      </SignInContainer>
    </ThemeProvider>
  );

  

  
}
export default SignIn;