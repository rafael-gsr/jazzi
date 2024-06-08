import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { Slider } from '@mui/material';

const MusicCommands = () => {
  return (
    <>
      <SkipPreviousIcon />
      <PlayArrowIcon />
      <SkipNextIcon />
      <Slider/>
    </>
  )
}

export default MusicCommands
