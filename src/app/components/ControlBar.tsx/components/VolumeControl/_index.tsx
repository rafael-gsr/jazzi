'use client'

import { VolumeMute, VolumeOff } from "@mui/icons-material";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";
import { Slider } from "@mui/material";
import * as S from './styles'
import { ChangeEvent, useState } from "react";

const VolumeControl = () => {
  const [volume, setVolume ] = useState<number>(100)

  function handleVolumeChange(data: ChangeEvent){
    setVolume(data.target.value)
  }

  return(
    <>
      <Slider
        value={volume}
        onChange={handleVolumeChange}
        sx={S.SliderStyle}
        max={100}
      />

      <VolumeOff/>
      <VolumeMute/>
      <VolumeDown/>
      <VolumeUp/>
    </>
  )
}

export default VolumeControl