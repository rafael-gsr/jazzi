'use client'

import { VolumeMute, VolumeOff } from "@mui/icons-material";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";
import { Slider } from "@mui/material";
import * as S from './styles'
import { useAudioContext } from "@/app/context/audioContext/_index";

const VolumeControl = () => {
  const [ values, functions ] = useAudioContext()

  function handleVolumeChange(data: any){
    functions.handleVolume(data.target.value)
  }

  function handleSetMuted(){
    functions.handleMuted(!values.muted)
  }

  function handleOnMute(muted: boolean, originalVolume: number){
    if(muted){
      return 0
    } else {
      return originalVolume
    }  
  }

  function switchVolumeIcon(muted: boolean, vol: number){
    switch (true){
      case muted:
        return <VolumeOff onClick={handleSetMuted} className='icon' />
      case vol >= 66:
        return <VolumeUp onClick={handleSetMuted} className='icon' />
      case vol >= 33:
        return <VolumeDown onClick={handleSetMuted} className='icon' />
      case vol === 0:
        return <VolumeOff onClick={handleSetMuted} className='icon' />
      default:
        return <VolumeMute onClick={handleSetMuted} className='icon' />
    }
  }
  
  return(
    <S.DivPrincipal>
      <Slider
        aria-label="Volume Control"
        value={handleOnMute(values.muted, values.volume)}
        valueLabelDisplay='auto'
        onChange={handleVolumeChange}
        sx={S.SliderStyle}
        max={100}
      />

      {switchVolumeIcon(values.muted, values.volume)}
    </S.DivPrincipal>
  )
}

export default VolumeControl