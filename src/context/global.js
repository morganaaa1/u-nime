import React, { createContext, useContext } from 'react'

const GlobalContext = createContext();

export const GlobalContextProvider = ({children}) => {

  const baseUrl = 'https://api.jikan.moe/v4'

  // Initial state
  const initialState = {
    popularAnime: [],
    upcomingAnime: [],
    airingAnime: [],
    pictures: [],
    isSearch: false,
    searchResults: [],
    loading: false,
  }

  return (
    <GlobalContext.Provider value={{

    }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(GlobalContext)
}
