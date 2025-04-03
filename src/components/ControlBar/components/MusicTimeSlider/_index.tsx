import { Slider } from "@mui/material"
import './styles.scss'
import { SyntheticEvent } from "react"
import { TimeBarInteractions } from "../../types"

type MusicTimeSliderProps = {
  duration:number,
  currentTime:number,
  handleCurrentTime: (time: number, type: TimeBarInteractions ) => void,
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

  function handleTimeChange(event: Event | SyntheticEvent, value: number | number[]){
    if (event.type === 'touchstart' || event.type === 'mousedown')
      handleCurrentTime(value as number, TimeBarInteractions.START)
    if (event.type === 'touchmove' || event.type === 'mousemove')
      handleCurrentTime(value as number, TimeBarInteractions.MOVE)
    if (event.type === 'touchend' || event.type === 'mouseup')
      handleCurrentTime(value as number, TimeBarInteractions.END)
  }

  return(
    <div className="time_slider">
      <MusicTimeSlider.TimeCounter time={parseToMinSec(currentTime)} />
      <Slider
        onChangeCommitted={handleTimeChange}
        aria-label="Music Time Slider"
        value={(currentTime)}
        onChange={handleTimeChange}
        max={duration}
        className="time_slider__slider"
      />
      <MusicTimeSlider.TimeCounter time={parseToMinSec((duration))}/>
    </div>
  )
}

MusicTimeSlider.TimeCounter = ({time}: {time: string}) => {
  return(
    <p className="time_counters">{time}</p>
  )
}

export default MusicTimeSlider