import React, { useState, createContext ,useEffect} from "react";

const UserContext = createContext({
  id: "",
  data:{},
  logOut: (id) => {},
  projects:(id)=>{}
});

export function Component1(props) {
  const [user, setUser] = useState(false);
  const [data, setData] = useState({});

  const logOut = () => {
    setUser(true);
  };

  //Projects
  const projects=(newData)=>{
    // console.log(data,"from datacenter")
    setData((prev) => ({ ...prev, ...newData, updatedAt: Date.now() }))
  }
useEffect(()=>{
// console.log(data,'the datat is receved here ')
},[data])
  // console.log(data,'from the api')
  const textData = {
    id: user,
    logOut: logOut,
    projects,
    data
  };

  return (
    <UserContext.Provider value={textData}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContext;
