import { Slider, SliderTypeMap } from "@mui/material"
import * as S from './styles'
import { useAudioContext } from "@/app/context/audioContext/_index"
import { useMusicContext } from "@/app/context/musicContext/_index"

const MusicTimeSlider = () => {
  const [ values, functions ] = useAudioContext()
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
    functions.handleCurrentTime(value as number)
  }

  // console.log(values)
  // console.log(currentTime)

  const restantTime = (
    <S.Numbers>-{parseToMinSec((values.duration - values.currentTime))}</S.Numbers>
  )

  const listenedTime = (
    <S.Numbers>{parseToMinSec(values.currentTime)}</S.Numbers>
  )

  return(
    <S.Wrapper>
      {listenedTime}
      <Slider
        aria-label="Music Time Slider"
        value={values.currentTime}
        onChange={handleTimeChange}
        max={values.duration}
        sx={S.SliderStyles}
      />
      {restantTime}
    </S.Wrapper>
  )
}

export default MusicTimeSlider