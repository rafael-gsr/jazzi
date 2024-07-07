'use client'

import * as S from './styles'
import VolumeControl from './components/VolumeControl/_index'
import MusicCommands from './components/MusicCommands/_index'
import MusicTimeSlider from './components/MusicTimeSlider/_index'
import useWidth from '../../utils/useWidth/index'
import MusicInfos from './components/MusicInfos/_index'

import { useEffect, useRef, useState } from 'react'
import * as Types from './types'
import { Playlists } from '@/app/assets/_musicsInfo'
import { useMusicContext } from '@/app/context/musicContext/_index'

const ControlBar = () => {
  const width = useWidth()
  const [playlistState, dispatchPlaylistState] = useMusicContext()
  const audioRef = useRef<HTMLAudioElement>(null)
  const [currentTime, setCurrentTime] = useState<number>(0)
  const [pausing, setPausing] = useState<boolean>(false)
  const [changingTime, setChangingTime] = useState<boolean>(false)
  const [audioState, setAudioState] = useState<Types.IAudioState>({
    play: () => {},
    pause: () => {},
    duration: 0,
    volume: 100,
    muted: false,
    paused: false,
  })

  function handleAudioState(newState: Types.handleAudioStateProps) {
    setAudioState({
      ...audioState,
      ...newState,
    })
  }

  useEffect(() => {
    if (audioRef.current) {
      dispatchPlaylistState({
        type: 'SETPLAYLIST',
        payload: Playlists[1].musics,
      })

      audioRef.current.ontimeupdate = (value: any) =>
        setCurrentTime(value.target.currentTime)

      audioRef.current.onloadedmetadata = () => {
        audioRef.current?.play()
        handleAudioState({
          play: audioRef.current?.play.bind(audioRef.current),
          pause: audioRef.current?.pause.bind(audioRef.current),
          duration: audioRef.current?.duration as number,
          volume: (audioRef.current?.volume as number) * 100,
          muted: audioRef.current?.muted,
          paused: audioRef.current?.paused,
        })
      }
    }
  }, [playlistState.playlistPos])

  function handlePlayPause(toPause?: boolean) {
    function PlayFunc() {
      new Promise<void>((resolve, reject) => {
        if (pausing) {
          reject('Another function is pausing')
        }
        setPausing(true)
        resolve(audioState.play())
      }).then(() => {
        setPausing(false)
      })
    }

    function PauseFunc() {
      new Promise<void>((resolve, reject) => {
        if (pausing) {
          reject('Another function is pausing')
        }
        setPausing(true)
        resolve(audioState.pause())
      }).then(() => setPausing(false))
    }

    if (toPause != undefined) {
      handleAudioState({ paused: toPause })
      if (toPause) {
        PauseFunc()
        return
      }
      PlayFunc()
      return
    }
    handleAudioState({ paused: !audioState.paused })
    if (audioState.paused) {
      PlayFunc()
      return
    } else {
      PauseFunc()
      return
    }
  }

  function handleMuted(muted: boolean) {
    if (audioRef.current) {
      audioRef.current.muted = muted
      handleAudioState({ muted: muted })
    }
  }

  function handleVolume(volume: number) {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100
      handleAudioState({ volume: volume })
    }
  }

  function handleCurrentTime(time: number, onlyVisual?: boolean) {
    function onlyVisChange() {
      new Promise<void>((resolve, reject) => {
        if (changingTime && pausing) {
          reject('Some function are already changing the time')
        }
        setChangingTime(true)
        setCurrentTime(time)
        !audioState.paused && handlePlayPause(true)
        resolve()
        return
      }).then(() => setChangingTime(false))
    }

    function totalChange() {
      new Promise<void>((resolve, reject) => {
        if (changingTime && pausing) {
          reject('Some function are already changing the time')
        }
        setCurrentTime(time)
        audioState.paused && handlePlayPause(false)
        audioRef.current.currentTime = time
        resolve()
      }).then(() => setChangingTime(false))
    }

    if (onlyVisual) {
      onlyVisChange()
      return
    }
    totalChange()
  }

  return (
    <S.ContentWrapper>
      <audio
        src={
          playlistState.playlist[playlistState.playlistPos] &&
          playlistState.playlist[playlistState.playlistPos].archive
        }
        ref={audioRef}
      />
      {width >= 1024 && <MusicInfos />}
      <div className='control__bar__playlist__controls'>
        <MusicCommands
          paused={audioState.paused}
          handlePlayPause={handlePlayPause}
        />
        <MusicTimeSlider
          duration={audioState.duration}
          currentTime={currentTime}
          handleCurrentTime={handleCurrentTime}
        />
      </div>
      {width >= 1024 && (
        <VolumeControl
          muted={audioState.muted}
          volume={audioState.volume}
          handleVolume={handleVolume}
          handleMuted={handleMuted}
        />
      )}
    </S.ContentWrapper>
  )
}

export default ControlBar
