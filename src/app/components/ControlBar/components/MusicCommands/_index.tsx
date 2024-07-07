'use client'

import PauseIcon from '@mui/icons-material/Pause'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious'
import SkipNextIcon from '@mui/icons-material/SkipNext'
import * as S from './styles'
import { darkBlue } from '@/app/styles/colors'
import { useMusicContext } from '@/app/context/musicContext/_index'

type musicCommandsProps = {
  paused: boolean;
  handlePlayPause: (isPaused?: boolean) => void
}

const MusicCommands = ({paused, handlePlayPause}: musicCommandsProps) => {
  const [ musicState, dispatchMusicState ] = useMusicContext()

  return (
    <S.DivPrincipal>
      <SkipPreviousIcon
        className='icon'
        onClick={() => dispatchMusicState ({ type: 'PREV'})}
        sx={ musicState.playlistPos === 0 ? { color: darkBlue[100] } : { color: 'white' }}
      />
      {paused ? (
        <PlayArrowIcon
          className='icon'
          onClick={() => handlePlayPause()}
        />
      ) : (
        <PauseIcon
          className='icon'
          onClick={() => handlePlayPause()}
        />
      )}
      <SkipNextIcon
        className='icon'
        onClick={() => dispatchMusicState ({type: 'NEXT'})}
        sx={
          musicState.playlistPos === musicState.playlist.length - 1
            ? { color: darkBlue[100]  }
            : { color: 'white' }
        }
      />
    </S.DivPrincipal>
  )
}

export default MusicCommands
