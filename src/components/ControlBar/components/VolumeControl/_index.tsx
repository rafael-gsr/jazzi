import { VolumeMute, VolumeOff } from "@mui/icons-material";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";
import { Slider } from "@mui/material";
import './styles.scss'

const VolumeControl = ({handleMuted, handleVolume, volume, muted}:any) => {

  function handleVolumeChange(data: any){
    if (muted) handleMuted(!muted)
    handleVolume(data.target.value)
  }

  function switchVolumeIcon(muted: boolean, vol: number){
    switch (true){
      case muted:
        return <VolumeOff onClick={() => handleMuted(!muted)} className='icon' />
      case vol >= 66:
        return <VolumeUp onClick={() => handleMuted(!muted)} className='icon' />
      case vol >= 33:
        return <VolumeDown onClick={() => handleMuted(!muted)} className='icon' />
      case vol === 0:
        return <VolumeOff onClick={() => handleMuted(!muted)} className='icon' />
      default:
        return <VolumeMute onClick={() => handleMuted(!muted)} className='icon' />
    }
  }
  
  return(
    <div className="volume_control">
      <Slider
        aria-label="Volume Control"
        value={muted ? 0 : volume}
        valueLabelDisplay='auto'
        onChange={handleVolumeChange}
        className="volume_control__slider"
        max={100}
      />

      {switchVolumeIcon(muted, volume)}
    </div>
  )
}

export default VolumeControl