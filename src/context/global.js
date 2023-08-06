import React, { createContext, useContext, useReducer } from 'react'

const GlobalContext = createContext();

export const GlobalContextProvider = ({children}) => {

  const baseUrl = 'https://api.jikan.moe/v4'

  // Reducer
  const reducer = (state, action) => {
    return state;
  }

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

  const [state, dispatch] = useReducer(reducer, initialState);

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
