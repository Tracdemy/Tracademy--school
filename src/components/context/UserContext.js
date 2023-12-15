// userContext.js

import React, { createContext, useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth'; // Assuming you're using Firebase Authentication

// Creating the UserContext
export const UserContext = createContext();

// UserContextProvider component
export const UserContextProvider = ({ children }) => {
  // State to hold user data
  const [user, setUser] = useState(null);

  // useEffect to get user's data
  useEffect(() => {
    const auth = getAuth();
    const currentUser = auth.currentUser;
    
    if (currentUser !== null) {
      setUser(currentUser);
      // The user object has basic properties such as display name, email, etc.
      // const displayName = currentUser.displayName;
      // const email = currentUser.email;
      // const photoURL = currentUser.photoURL;
      // const emailVerified = currentUser.emailVerified;
      // const uid = currentUser.uid;
    }
  }, []); // Empty dependency array to run this effect only once when the component mounts

  // Function to update user data
  const updateUser = (userData) => {
    setUser(userData);
  };

  // Value object for the context provider
  const contextValue = {
    user,
    updateUser,
  };

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};
