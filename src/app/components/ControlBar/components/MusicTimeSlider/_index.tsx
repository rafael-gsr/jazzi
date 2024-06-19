import { Slider, SliderTypeMap } from "@mui/material"
import * as S from './styles'
import { useState } from "react"
import { useAudioContext } from "@/app/context/audioContext/_index"
import { useMusicContext } from "@/app/context/musicContext/_index"

const MusicTimeSlider = () => {
  const totalTime: number = 120
  const { audioState, currentTime, handleCurrentTime } = useAudioContext()
  const { setPlaylistPos } = useMusicContext()

  setPlaylistPos(1)

  function parseToMinSec(value: number): string {
    const minutes = parseInt(`${value / 60}`)
    const seconds = parseInt(`${value % 60}`)
    
    function aditionalZero (number: number){
      if (number < 10){
        return '0'
      }
      return ''
    }

    return `${aditionalZero(minutes)}${minutes}:${aditionalZero(seconds)}${seconds}`
  }

  function handleTimeChange(
    event: Event,
    value: number | number[],
  ){
    handleCurrentTime(value as number)
  }

  // console.log(audioState)
  // console.log(currentTime)

  const restantTime = (
    <S.Numbers>-{parseToMinSec((audioState.duration - currentTime))}</S.Numbers>
  )

  const listenedTime = (
    <S.Numbers>{parseToMinSec(currentTime)}</S.Numbers>
  )

  return(
    <S.Wrapper>
      {listenedTime}
      <Slider
        aria-label="Music Time Slider"
        value={currentTime}
        onChange={handleTimeChange}
        max={totalTime}
        sx={S.SliderStyles}
      />
      {restantTime}
    </S.Wrapper>
  )
}

export default MusicTimeSlider