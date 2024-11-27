import React, { createContext, useState } from "react";

// Create the UserContext
const UserContext = createContext();

// Create and export the UserProvider
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
