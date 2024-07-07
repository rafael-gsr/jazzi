'use client'

import { createContext, useContext, useReducer, useState } from "react";
import * as Types from './types'

const MusicContext = createContext({})

function musicContextReducer (state:Types.MusicReducerStateProps, action: Types.MusicReducerActionProps) {
  switch(action.type){
    case Types.ReducerActionsTypes.NEXT:
      if (state.playlistPos < state.playlist.length - 1) {
        return { ...state, playlistPos: state.playlistPos + 1}
      }
      return state
    case Types.ReducerActionsTypes.PREV:
      if (state.playlistPos > 0) {
        return { ...state, playlistPos: state.playlistPos - 1}
      }
      return state
    case Types.ReducerActionsTypes.SETPLAYLIST:
      return {
        ...state,
        playlist: action.payload as [],
      }
    case Types.ReducerActionsTypes.SETPLAYLISTPOS:
      return {
        ...state,
        playlistPos: action.payload as number,
      }
    default:
      throw new Error(
        "The musicContextReducer must be used with an action parameter"
      )
  }
}

export const MusicContextProvider = ({children}: Types.IMusicContextProvider ) => {
  const [ musicContextState, dispatchMusicStateAction ] = useReducer(musicContextReducer , {
    playlist: [],
    playlistPos: 0,
  })

  return(
    <MusicContext.Provider value={[
      musicContextState,
      dispatchMusicStateAction
    ]}>
      {children}
    </MusicContext.Provider>
  )
}

export const useMusicContext = (): Types.IMusicContextHook => {
  const musicContext = useContext(MusicContext)
  if(!musicContext){
    throw new Error(
      "useMusicContext should be used with a MusicContextProvider"
    )
  }
  return musicContext as Types.IMusicContextHook
}

