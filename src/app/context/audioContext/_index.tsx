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
    play: () => {},
    pause: () => {},
    duration: 0,
    volume: 100,
    muted: false,
    paused: false,
  })
  const [currentTime, setCurrentTime] = useState<number>(0)

  function handleAudioState(newState: Types.handleAudioStateProps) {
    setAudioState({
      ...audioState,
      ...newState,
    })
  } 

  console.log(audioRef)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.ontimeupdate = (value: any) =>
        setCurrentTime(value.target.currentTime)
      audioRef.current.onloadedmetadata = () =>
        handleAudioState({
          play: audioRef.current?.play.bind(audioRef.current) as () => void,
          pause: audioRef.current?.pause.bind(audioRef.current) as () => void,
          duration: audioRef.current?.duration as number,
          volume: audioRef.current?.volume as number * 100,
          muted: audioRef.current?.muted,
          paused: audioRef.current?.paused,
        })
    }
  }, [playlistPos])

  const functions = { 
    handlePlayPause: (toPause?: boolean) => {
      if (`${toPause}` === 'false' || `${toPause}` === 'true' ){
        toPause ? audioState.pause() : audioState.play()
        handleAudioState({paused: toPause})
        return
      }
      audioState.paused ? audioState.play() : audioState.pause()
      handleAudioState({paused: !audioState.paused})
    },
    handleMuted: (muted: boolean) => {
      if (audioRef.current){
        audioRef.current.muted = muted
        handleAudioState({ muted: muted})
      }
    },
    handleVolume: (volume: number) => {
      if (audioRef.current) {
        audioRef.current.volume = volume / 100
        handleAudioState({ volume: volume})
      }
    },
    handleCurrentTime: (time: number) => {
      if (audioRef.current) {
        audioRef.current.currentTime = time
        setCurrentTime(time)
      }
    }
  }

  const values = {
    duration: audioState.duration,
    muted: audioState.muted,
    volume: audioState.volume,
    currentTime: currentTime,
    paused: audioState.paused
  }


  return (
    <AudioContext.Provider
      value={[
        values,
        functions,
      ]}
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
