import { Slider, SliderTypeMap } from "@mui/material"
import './styles.scss'
import { SyntheticEvent } from "react"

type MusicTimeSliderProps = {
  duration:number,
  currentTime:number,
  handleCurrentTime: (time: number, onlyVisual?: boolean ) => void,
}

const MusicTimeSlider = ({duration, currentTime, handleCurrentTime}: MusicTimeSliderProps) => {

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

  function handleTimeCommitted( event: Event | SyntheticEvent, value: number | number[]) {
    console.log('time commited')
    handleCurrentTime(value as number)
  }

  function handleTimeVisual(event: Event, value: number | number[]){
    console.log('time visual')
    handleCurrentTime(value as number, true)
  }

  return(
    <div className="time_slider">
      <MusicTimeSlider.TimeCounter time={parseToMinSec(currentTime)} />
      <Slider
        onChangeCommitted={handleTimeCommitted}
        aria-label="Music Time Slider"
        value={(currentTime)}
        onChange={handleTimeVisual}
        max={duration}
        className="time_slider__slider"
      />
      <MusicTimeSlider.TimeCounter time={parseToMinSec((duration - currentTime))}/>
    </div>
  )
}

MusicTimeSlider.TimeCounter = ({time}: {time: string}) => {
  return(
    <p className="time_counters">{time}</p>
  )
}

export default MusicTimeSlider