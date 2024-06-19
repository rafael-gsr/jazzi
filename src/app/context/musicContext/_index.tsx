'use client'

import { createContext, useContext, useState } from "react";
import * as Types from './types'

const MusicContext = createContext({})

export const MusicContextProvider = ({children}: Types.IMusicContextProvider ) => {
  const [ playlist, setPlaylist ] = useState<Types.Playlist>([])
  const [ playlistPos, setPlaylistPos ] = useState<number>(0)

  return(
    <MusicContext.Provider value={{
      playlist,
      setPlaylist,
      playlistPos,
      setPlaylistPos
    }}>
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

