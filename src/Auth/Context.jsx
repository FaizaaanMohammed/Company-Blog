
import React, { createContext, useContext, useEffect, useState } from 'react'


const createAuthContext = createContext()
const Context = ({children}) => {
    const initialValue = {
        user:null,
        token:""
    }
    const [auth,setAuth] = useState(initialValue);
    useEffect(()=>{
     const data = localStorage.getItem("auth");
     if(data){
        const parseData = JSON.parse(data)
        setAuth(
            {
                ...auth,
                user:parseData.user,
                token:parseData.token
            }
        )
     }
    },[])

  return (
    <>
    <createAuthContext.Provider value={[auth,setAuth]}>
     {children}
    </createAuthContext.Provider>
    </>
  )
}

const useAuth = ()=> useContext(createAuthContext)
export {useAuth,Context}
