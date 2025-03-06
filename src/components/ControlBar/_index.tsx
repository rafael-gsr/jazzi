'use client'

import './styles.scss'
import VolumeControl from './components/VolumeControl/_index'
import MusicCommands from './components/MusicCommands/_index'
import MusicTimeSlider from './components/MusicTimeSlider/_index'
import useWidth from '../../utils/useWidth'
import MusicInfos from './components/MusicInfos/_index'

import { useEffect, useRef, useState } from 'react'
import * as Types from './types'
import { Playlists } from '@/assets/_musicsInfo'
import { useMusicContext } from '@/context/musicContext/_index'
import { debounce } from '@/utils/debounce'

const ControlBar = () => {
  const width = useWidth()
  const [playlistState] = useMusicContext()
  const audioRef = useRef<HTMLAudioElement>(null)
  const [currentTime, setCurrentTime] = useState<number>(0)
  const [pausing, setPausing] = useState<boolean>(false)
  const [changingTime, setChangingTime] = useState<boolean>(false)
  const [ showPlayer, setShowPlayer ] = useState<boolean>(false)
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
      setShowPlayer(true)
    }
  }, [playlistState.playlistPos])

  function handlePlayPause(toPause?: boolean) {
    function PlayMusic() {
      if(!pausing && !changingTime){
        setPausing(true)
        audioState.play()
        setPausing(false)
      }
    }

    function PauseMusic() {
      if(!pausing && !changingTime){
        setPausing(true)
        audioState.pause()
        setPausing(false)
      }
    }

    const debouncePlayPause = debounce(() => {
      if (toPause != undefined) {
        handleAudioState({ paused: toPause })
        toPause
          ? PauseMusic()
          : PlayMusic()
      }
    
      handleAudioState({ paused: !audioState.paused })
      audioState.paused
        ? PlayMusic()
        : PauseMusic()
      }, 300, true)

    debouncePlayPause()
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
    function visualChange() {
      if (!changingTime && !pausing) {
        setChangingTime(true)
        !audioState.paused && handlePlayPause(true)
        setCurrentTime(time)
        setChangingTime(false)
      }
    }

    function totalChange() {
      if (!changingTime && !pausing) {
        if (audioRef.current) {
          audioRef.current.currentTime = time
        }
        setCurrentTime(time)
        setChangingTime(false)
        audioState.paused && handlePlayPause(false)
      }
    }

    const debounceTotalChange = debounce(totalChange, 100, false)
    const debounceVisualChange = debounce(visualChange, 100, false)

    if (onlyVisual) {
      debounceVisualChange()
      return
    }
    debounceTotalChange()
  }

  return (
    <>
      <section
        className={playlistState.playlist[playlistState.playlistPos] ? 'control_bar' : 'hidden'}
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
      </section>
  </>

  )
}

export default ControlBar
