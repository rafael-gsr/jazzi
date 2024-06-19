'use client'

/// resolver o problema do loop de carregamento do loop

import {
  ChangeEvent,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import * as Types from './types'
import { useMusicContext } from '../musicContext/_index'

// AudioRef.current.duration
// AudioRef.current.currentTime
// AudioRef.current.volume "OBS: between 0 and 1"
// AudioRef.current.play()
// AudioRef.current.pause()
// AudioRef.current.ontimeupdate

const AudioContext = createContext({})

export const AudioContextProvider = ({ children }: Types.AudioContextProps) => {
  const { playlist, playlistPos } = useMusicContext()
  const audioRef = useRef<HTMLAudioElement>(null)
  const [audioState, setAudioState] = useState<Types.IAudioState>({
    duration: 0,
    volume: 1,
  })
  const [currentTime, setCurrentTime] = useState<number>(0)

  function handleAudioState(newState: Types.IAudioState) {
    setAudioState({
      ...audioState,
      ...newState,
    })
  }

  function handleCurrentTime(time: number) {
    if (audioRef.current) {
      audioRef.current.currentTime = time
      setCurrentTime(time)
    }
  }

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.ontimeupdate = (value: any) =>
        setCurrentTime(value.target.currentTime)
      audioRef.current.onloadedmetadata = () =>
        handleAudioState({
          play: audioRef.current.play,
          pause: audioRef.current.pause,
          duration: audioRef.current.duration,
          volume: audioRef.current.volume,
        })
    }
  }, [playlistPos])

  return (
    <AudioContext.Provider
      value={{
        audioState,
        handleAudioState,
        currentTime,
        handleCurrentTime,
      }}
    >
      <audio
        src={playlist[playlistPos] ? playlist[playlistPos].archive : ''}
        ref={audioRef}
      />
      {children}
    </AudioContext.Provider>
  )
}

export const useAudioContext = (): Types.IUseAudioState => {
  const audioContext = useContext(AudioContext)

  if (!audioContext) {
    throw new Error(
      'useAudioContext should be used inside AudioContextProvider'
    )
  }

  return audioContext as Types.IUseAudioState
}
