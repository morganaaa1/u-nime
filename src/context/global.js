import React, { createContext, useContext } from 'react'

const GlobalContext = createContext();

export const GlobalContextProvider = ({children}) => {
  return (
    <GlobalContext.Provider value={'Hello'}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(GlobalContext)
}
