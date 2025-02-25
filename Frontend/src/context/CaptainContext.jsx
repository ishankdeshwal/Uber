import React, { createContext, useState } from 'react'
export const CaptainDataContext=createContext(null)
function CaptainContext({children}){
    const [captain,setCaptain]=useState(null)
    const [isLoading,setisLoading]=useState(true)
    const[error,setError]=useState(null)
    const updateCaptain=(captainData)=>{
        setCaptain(captainData)
    }
    const value={
        captain,
        setCaptain,
        isLoading,
        setisLoading,
        error,
        setError,
        updateCaptain
    }
    return(
        <div>
            <CaptainDataContext.Provider value={value}>
                {children}
            </CaptainDataContext.Provider>
        </div>
    )
}
export default CaptainContext;