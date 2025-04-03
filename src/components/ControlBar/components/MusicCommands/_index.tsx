import PauseIcon from '@mui/icons-material/Pause'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious'
import SkipNextIcon from '@mui/icons-material/SkipNext'
import { darkBlue } from '@/styles/colors'
import { useMusicContext } from '@/context/musicContext/_index'
import './styles.scss'

type musicCommandsProps = {
  paused: boolean | undefined;
  handlePlayPause: (isPaused?: boolean) => void
}

const MusicCommands = ({paused = true, handlePlayPause}: musicCommandsProps) => {
  const [ musicState, dispatchMusicState ] = useMusicContext()

  return (
    <div className='music_comands'>
      <SkipPreviousIcon
        className='music_commands__icon'
        onClick={() => dispatchMusicState ({ type: 'PREV'})}
        sx={ musicState.playlistPos === 0 ? { color: darkBlue[100] } : { color: 'white' }}
      />
      {paused ? (
        <PlayArrowIcon
          className='music_commands__icon'
          onClick={() => handlePlayPause()}
        />
      ) : (
        <PauseIcon
          className='music_commands__icon'
          onClick={() => handlePlayPause()}
        />
      )}
      <SkipNextIcon
        className='music_commands__icon'
        onClick={() => dispatchMusicState ({type: 'NEXT'})}
        sx={
          musicState.playlistPos === musicState.playlist.length - 1
            ? { color: darkBlue[100]  }
            : { color: 'white' }
        }
      />
    </div>
  )
}

export default MusicCommands
