import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // Use useHistory hook

  // useEffect(() => {
  //   const authToken = localStorage.getItem('authToken');
  //   //console.log('Auth token:', authToken); // Debugging line
  //   if (authToken) {
  //     // Fetch user data based on the token
  //     fetchUserData(authToken).then(userData => {
  //       console.log('Fetched user data:', userData); // Debugging line
  //       if (userData && userData.role) {
  //         console.log('User role:', userData.role); // Debugging line
  //       } else {
  //         console.log('User role not found'); // Debugging line
  //       }
  //       setUser(userData);
  //     });
  //   }
  // }, []);

  const signIn = (userData, token) => {
    //console.log('Setting auth token:', token); 
    localStorage.setItem('authToken', token);
    console.log('Signing in user:', userData); // Debugging line
    if (userData && userData.role) {
      console.log('User role:', userData.role); // Debugging line
    } else {
      console.log('User role not found'); // Debugging line
    }
    setUser(userData);
  };

  const signOut = () => {
    localStorage.removeItem('authToken');
    setUser(null);
    navigate('/'); // Redirect to home page
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

// const fetchUserData = async (token) => {
//     try {
//       const response = await axios.get('http://localhost:8000/api/auth/user/', {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });
//       console.log('Fetched user data:', response.data);
//       return response.data; // Assuming the response data contains user information
//     } catch (error) {
//       console.error('There was an error fetching user data!', error);
//       return null;
//     }
//   };