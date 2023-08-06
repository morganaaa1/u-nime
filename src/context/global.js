import React, { createContext, useContext, useEffect, useReducer } from 'react'

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

  // Fetch Popular Anime
  const getPopularAnime = async () => {
    const response = await fetch(`${baseUrl}/top/anime/?filter=bypopularity`);
    const data = await response.json();
    console.log(data.data);
  }

  // initial render
  useEffect(() => {
    getPopularAnime();
  }, [])

  return (
    <GlobalContext.Provider value={{
      ...state,
    }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(GlobalContext)
}
