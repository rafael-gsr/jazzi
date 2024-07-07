import { Slider, SliderTypeMap } from "@mui/material"
import * as S from './styles'
import { SyntheticEvent } from "react"

type MusicTimeSliderProps = {
  duration:number,
  currentTime:number,
  handleCurrentTime: (time?: number, onlyVisual?: boolean ) => void,
}

const MusicTimeSlider = ({duration, currentTime, handleCurrentTime}: any) => {

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

  function handleTimeCommitted( event: Event | SyntheticEvent, value: number | number[],){
    console.log(event)
    handleCurrentTime(value as number)
  }

  function handleTimeVisual(event: Event, value: number | number[]){
    handleCurrentTime(value as number, true)
  }

  const restantTime = (
    <S.Numbers>-{parseToMinSec((duration - currentTime))}</S.Numbers>
  )

  const listenedTime = (
    <S.Numbers>{parseToMinSec(currentTime)}</S.Numbers>
  )

  return(
    <S.Wrapper>
      {listenedTime}
      <Slider
        onChangeCommitted={handleTimeCommitted}
        aria-label="Music Time Slider"
        value={(currentTime)}
        onChange={handleTimeVisual}
        max={duration}
        sx={S.SliderStyles}
        
      />
      {restantTime}
    </S.Wrapper>
  )
}

export default MusicTimeSlider