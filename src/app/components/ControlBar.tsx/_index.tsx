'use client'

import * as S from './styles'
import VolumeControl from './components/VolumeControl/_index';
import MusicCommands from './components/MusicCommands/_index';

const ControlBar = () => {
  return(
    <S.ContentHeader>
      <MusicCommands/>
      <VolumeControl/>
    </S.ContentHeader>
  )
}

export default ControlBar