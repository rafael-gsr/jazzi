'use client'

import { VolumeMute, VolumeOff } from "@mui/icons-material";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";
import { Slider } from "@mui/material";
import * as S from './styles'

const VolumeControl = ({handleMuted, handleVolume, volume, muted}:any) => {

  function handleVolumeChange(data: any){
    handleVolume(data.target.value)
  }

  function handleSetMuted(){
    handleMuted(!muted)
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
        value={handleOnMute(muted, volume)}
        valueLabelDisplay='auto'
        onChange={handleVolumeChange}
        sx={S.SliderStyle}
        max={100}
      />

      {switchVolumeIcon(muted, volume)}
    </S.DivPrincipal>
  )
}

export default VolumeControl