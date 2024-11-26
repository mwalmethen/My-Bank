import React, { createContext, useState } from "react";

// Create the UserContext
const UserContext = createContext();

// Create and export the UserProvider
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children} {/* Render the children passed to this provider */}
    </UserContext.Provider>
  );
};

export default UserContext;
