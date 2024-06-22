'use client'

import * as S from './styles'
import VolumeControl from './components/VolumeControl/_index';
import MusicCommands from './components/MusicCommands/_index';
import MusicTimeSlider from './components/MusicTimeSlider/_index';
import useWidth from '../../utils/useWidth/index';
import PlayingMusic from './components/PlayingMusic/_index';
import MusicInfos from './components/MusicInfos/_index';

const ControlBar = () => {
  const width = useWidth()
  return(
    <S.ContentHeader>
      <PlayingMusic/>
      { width >= 1024 && <MusicInfos/> }
      <div className='musicStatus'>
        <MusicCommands />
        <MusicTimeSlider />
      </div>
      { width >= 1024 && <VolumeControl/> }
    </S.ContentHeader>
  )
}

export default ControlBar