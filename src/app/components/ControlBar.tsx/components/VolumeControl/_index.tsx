'use client'

import { VolumeMute, VolumeOff } from "@mui/icons-material";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";
import { Slider } from "@mui/material";
import * as S from './styles'
import { useState } from "react";

const VolumeControl = () => {
  const [volume, setVolume ] = useState<number>(100)
  const [ muted, setMuted ] = useState<boolean>(false)

  function handleVolumeChange(data: any){
    setVolume(data.target.value)
    console.log(data)
  }

  function handleSetMuted(){
    setMuted(!muted)
  }

  function handleOnMute(muted: boolean, originalVolume: number){
    if(muted){
      return 0
    } else {
      return originalVolume
    }  
  }

  function switchVolumeIcon(vol: number, muted: boolean){
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
        value={handleOnMute(muted,volume)}
        valueLabelDisplay='auto'
        onChange={handleVolumeChange}
        sx={S.SliderStyle}
        max={100}
      />

      {switchVolumeIcon(volume, muted)}
    </S.DivPrincipal>
  )
}

export default VolumeControl