import React,{createContext, useState}from 'react'

export const AppContext = createContext()
function AuthProvider({children}) {
const [user,setUser] = useState("");
const [error,setError] = useState("");
const[editId,setEditId] = useState("");

const editcontext=(id)=>{
  console.log(id,'from the context container')
  setEditId(id);
}

const value = {
    user,
    error,
    editId,
    setUser,
    setError,
    editcontext
}
  return (
    <AppContext.Provider value={value}>{children}</AppContext.Provider>
  )
}

export default AuthProvider