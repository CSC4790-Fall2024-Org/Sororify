import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import MuiCard from '@mui/material/Card';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import getSignUpTheme from './getSignUpTheme';
import { GoogleIcon, FacebookIcon, SitemarkIcon } from './CustomIcons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 'auto',
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  [theme.breakpoints.up('sm')]: {
    width: '450px',
  },
  ...theme.applyStyles('dark', {
    boxShadow:
      'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
}));

const SignUpContainer = styled(Stack)(({ theme }) => ({
  minHeight: '100%',
  padding: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4),
  },
  backgroundImage:
    'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
  backgroundRepeat: 'no-repeat',
  ...theme.applyStyles('dark', {
    backgroundImage:
      'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
  }),
}));

export default function SignUp() {
  const [mode, setMode] = React.useState('light');
  const [showCustomTheme, setShowCustomTheme] = React.useState(true);
  const defaultTheme = createTheme({ palette: { mode } });
  const SignUpTheme = createTheme(getSignUpTheme(mode));
  const [nameError, setNameError] = React.useState(false);
  const [nameErrorMessage, setNameErrorMessage] = React.useState('');
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
  const [role, setRole] = React.useState('');
  const [chapter, setChapter] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Get the navigate function

  // This code only runs on the client side, to determine the system color preference
  React.useEffect(() => {
    // Check if there is a preferred mode in localStorage
    const savedMode = localStorage.getItem('themeMode');
    if (savedMode) {
      setMode(savedMode);
    } else {
      // If no preference is found, it uses system preference
      const systemPrefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)',
      ).matches;
      setMode(systemPrefersDark ? 'dark' : 'light');
    }
  }, []);
  const handleRoleChange = (event) => {
    setRole(event.target.value);
    
  };
  const handleChapterChange = (event) => {
    setChapter(event.target.value);
    
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

    if (!username.value || username.value.length < 1) {
      setNameError(true);
      setNameErrorMessage('Name is required.');
      isValid = false;
    } else {
      setNameError(false);
      setNameErrorMessage('');
    }

    return isValid;
  };


  const verifyChair = async (email, chapter) => {
    console.log('verifyChair called with email:', email, 'and chapter', chapter); // Debugging statement
    const params = {
      surveyType: 'Chair Survey',
      email: email,
      chapter: chapter
    };
    console.log('Request params:', params); // Log the params object
    try {
      const response = await axios.get('http://localhost:5000/api/survey-results', { params });
      console.log('Response from server:', response); // Log the entire response object


      if (response.data.length > 0) {
        console.log('Chair verification successful for chapter:', chapter); // Debugging statement
        return true; // Return true if the PIN verification is successful
      } else {
        console.log('Incorrect Chair'); // Print Incorrect Pin if no match is found
        return false; // Return false if the PIN verification fails
      }
    } catch (error) {
      console.error('Error verifying chair email:', error);
      return false; // Return false if there is an error during the request
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
  
    if (nameError || emailError || passwordError) {
      return;
    }
  
    const form = event.currentTarget; // Get the form element
    const data = new FormData(form); // Create a FormData object from the form element

    const role = data.get('role'); // Get the role value

    if (role === 'chair') {
      const email = data.get('email');
      const chapter = data.get('chapter'); // Get the chapter value

      const chairVerification =  await verifyChair(email, chapter);
      if (!chairVerification) {
        setError('Not a valid recruitment chair');
        return;
      }
    }
  
    try {
      const response = await axios.post('http://localhost:8000/api/auth/signup/', {
        username: data.get('username'),
        email: data.get('email'),
        password: data.get('password'),
        role: data.get('role'),
        chapter: data.get('chapter'),
      });
      console.log(response.data);
      navigate('/signin');
      // Handle successful sign-up (e.g., redirect to login page)
    } catch (error) {
      console.error('There was an error!', error);
      setError('Failed to sign up. Please try again.');
    }
  };

  return (
      <ThemeProvider theme={showCustomTheme ? SignUpTheme : defaultTheme}>
        <CssBaseline enableColorScheme />
        <SignUpContainer direction="column" justifyContent="space-between">
          <Card variant="outlined">
            <SitemarkIcon />
            <Typography
              component="h1"
              variant="h4"
              sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
            >
              Sign up
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
            >
            <FormControl>
          <FormLabel htmlFor="role">Role</FormLabel>
          <Select
            id="role"
            placeholder="Select your role"
            name="role"
            value={role}
            onChange={handleRoleChange}
            required
            fullWidth
          >
            <MenuItem value="member">Member</MenuItem>
            <MenuItem value="pnm">PNM</MenuItem>
            <MenuItem value="chair">Recruitment Chair</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="chapter">Chapter (For current Members or Admin) </FormLabel>
          <Select
            id="chapter"
            placeholder="Select your chapter"
            name="chapter"
            value={chapter}
            onChange={handleChapterChange}
            fullWidth
          >
            <MenuItem value="aphi">APHI</MenuItem>
            <MenuItem value="axo">AXO</MenuItem>
            <MenuItem value="ddd">DDD</MenuItem>
            <MenuItem value="kkg">KKG</MenuItem>
            <MenuItem value="kd">KD</MenuItem>
            <MenuItem value="chio">CHIO</MenuItem>
            <MenuItem value="dg">DG</MenuItem>
          </Select>
        </FormControl>
              <FormControl>
                <FormLabel htmlFor="username">Full name</FormLabel>
                <TextField
                  autoComplete="username"
                  name="username"
                  required
                  fullWidth
                  id="username"
                  placeholder="Jon Snow"
                  error={nameError}
                  helperText={nameErrorMessage}
                  color={nameError ? 'error' : 'primary'}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="email">Email</FormLabel>
                <TextField
                  required
                  fullWidth
                  id="email"
                  placeholder="your@email.com"
                  name="email"
                  autoComplete="email"
                  variant="outlined"
                  error={emailError}
                  helperText={emailErrorMessage}
                  color={passwordError ? 'error' : 'primary'}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="password">Password</FormLabel>
                <TextField
                  required
                  fullWidth
                  name="password"
                  placeholder="••••••"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  variant="outlined"
                  error={passwordError}
                  helperText={passwordErrorMessage}
                  color={passwordError ? 'error' : 'primary'}
                />
              </FormControl>
              {error && <div style={{ color: 'red' }}>{error}</div>}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                onClick={validateInputs}
              >
                Sign up
              </Button>
              <Typography sx={{ textAlign: 'center' }}>
                Already have an account?{' '}
                <span>
                  <Link
                    href="/material-ui/getting-started/templates/sign-in/"
                    variant="body2"
                    sx={{ alignSelf: 'center' }}
                  >
                    Sign in
                  </Link>
                </span>
              </Typography>
            </Box>
          </Card>
        </SignUpContainer>
      </ThemeProvider>
  );
}