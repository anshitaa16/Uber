import React, { createContext, useState } from 'react';

// Create the context
export const UserDataContext = createContext();

// Create the provider component
const UserContext = ({ children }) => {
  const [user, setUser] = useState({
    email: '',
    fullName: {
      firstname: '',
      lastname: '',
    },
  });

  return (
    <UserDataContext.Provider value={[user, setUser]}>
      {children}
    </UserDataContext.Provider>
  );
};

export default UserContext;
