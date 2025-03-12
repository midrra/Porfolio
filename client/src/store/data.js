import React, { useState, createContext } from "react";

const UserContext = createContext({
  id: "",
  logOut: (id) => {},
});

export function Component1(props) {
  const [user, setUser] = useState(false);

  const logOut = () => {
    setUser(true);
  };

  const textData = {
    id: user,
    logOut: logOut,
  };

  return (
    <UserContext.Provider value={textData}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContext;
