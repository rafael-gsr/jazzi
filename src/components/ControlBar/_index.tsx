'use client'

import './styles.scss'
import VolumeControl from './components/VolumeControl/_index'
import MusicCommands from './components/MusicCommands/_index'
import MusicTimeSlider from './components/MusicTimeSlider/_index'
import useWidth from '../../utils/useWidth'
import MusicInfos from './components/MusicInfos/_index'

import { useEffect, useRef, useState } from 'react'
import * as Types from './types'
import { useMusicContext } from '@/context/musicContext/_index'

const ControlBar = () => {
  const width = useWidth()
  const [playlistState] = useMusicContext()
  const audioRef = useRef<HTMLAudioElement>(null)
  const [currentTime, setCurrentTime] = useState<number>(0)
  const [audioState, setAudioState] = useState<Types.IAudioState>({
    duration: 0,
    volume: 100,
  })
  const [ muted, setMuted ] = useState<boolean>(false)

  function handleAudioState(newState: Types.handleAudioStateProps) {
    setAudioState({
      ...audioState,
      ...newState,
    })
  }

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.ontimeupdate = (value: any) =>
        setCurrentTime(value.target.currentTime)

      audioRef.current.onloadedmetadata = () => {
        audioRef.current?.play()
        handleAudioState({
          duration: audioRef.current?.duration as number,
          volume: (audioRef.current?.volume as number) * 100,
        })
      }
    }
  }, [playlistState.playlistPos])

  const handlePlayPause = (toPause?: boolean) => {
    const PauseMusic = () => {
      if (audioRef.current?.played) {
        audioRef.current?.pause()
      }
    }

    const PlayMusic = () => {
      if (audioRef.current?.paused) {
        audioRef.current?.play().catch(() => PlayMusic())
      }
    }

    if (PauseMusic !== undefined || PlayMusic !== undefined) {
      if (toPause != undefined) {
        toPause
          ? PauseMusic()
          : PlayMusic()
        return
      }
      
      audioRef.current?.paused
        ? PlayMusic()
        : PauseMusic()
    }
  }

  function handleMuted(muted: boolean) {
    if (audioRef.current) {
      setMuted(muted)
      audioRef.current.muted = muted
    }
  }

  function handleVolume(volume: number) {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100
      handleAudioState({ volume: volume })
    }
  }

  function handleCurrentTime(time: number, type: Types.TimeBarInteractions) {
    switch (type) {
      case Types.TimeBarInteractions.START:
        handlePlayPause(true)
        break
      case Types.TimeBarInteractions.MOVE:
        setCurrentTime(time)
        break
      case Types.TimeBarInteractions.END: 
        if (audioRef.current) {
          audioRef.current.currentTime = time
        }
        handlePlayPause(false)
        break
      default: break
    }
  }

  return (
    <>
      <section
        className={
          playlistState.playlist[playlistState.playlistPos]
          ? 'control_bar'
          : 'hidden'
        }
      >
        <audio
          src={
            playlistState.playlist[playlistState.playlistPos] &&
            playlistState.playlist[playlistState.playlistPos].archive
          }
          ref={audioRef}
        />
        {width >= 1024 && <MusicInfos />}
        <div className='control_bar__playlist__controls'>
          <MusicCommands
            paused={audioRef.current?.paused}
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
            muted={muted}
            volume={audioState.volume}
            handleVolume={handleVolume}
            handleMuted={handleMuted}
          />
        )}
      </section>
  </>

  )
}

export default ControlBar
