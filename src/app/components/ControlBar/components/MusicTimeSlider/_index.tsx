import { Slider, SliderTypeMap } from "@mui/material"
import * as S from './styles'
import { useState } from "react"

const MusicTimeSlider = () => {
  const totalTime: number = 120
  const [ musicTime, setMusicTime ] = useState<number>(35)

  function parseToMinSec(value: number): string {
    const minutes = parseInt(`${value / 60}`)
    const seconds = value % 60
    
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
    setMusicTime(value as number)
  }

  const restantTime = (
    <S.Numbers>-{parseToMinSec((totalTime - musicTime))}</S.Numbers>
  )

  const listenedTime = (
    <S.Numbers>{parseToMinSec(musicTime)}</S.Numbers>
  )

  return(
    <S.Wrapper>
      {listenedTime}
      <Slider
        aria-label="Music Time Slider"
        value={musicTime}
        onChange={handleTimeChange}
        max={totalTime}
        sx={S.SliderStyles}
      />
      {restantTime}
    </S.Wrapper>
  )
}

export default MusicTimeSlider