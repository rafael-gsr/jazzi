'use client'

import PauseIcon from '@mui/icons-material/Pause'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious'
import SkipNextIcon from '@mui/icons-material/SkipNext'
import * as S from './styles'
import { useState } from 'react'
import { darkBlue } from '@/app/styles/colors'
import { useAudioContext } from '@/app/context/audioContext/_index'

const MusicCommands = () => {
  const playlistLenght = 15
  const [ audioConValues, audioConFunctions ] = useAudioContext()
  const [playlistPos, setPlaylistPos] = useState<number>(0)

  function handleNextAndPrev(nextOrPrev: 'next' | 'prev') {
    switch (nextOrPrev) {
      case 'next':
        if (playlistPos < playlistLenght) {
          setPlaylistPos(playlistPos + 1)
          audioConFunctions.handlePlayPause(false)
          return
        }
        break
      case 'prev':
        if (playlistPos > 0) {
          setPlaylistPos(playlistPos - 1)
          audioConFunctions.handlePlayPause(false)
          return
        }
        break
    }
  }

  return (
    <S.DivPrincipal>
      <SkipPreviousIcon
        className='icon'
        onClick={() => handleNextAndPrev('prev')}
        sx={playlistPos === 0 ? { color: darkBlue[100] } : { color: 'white' }}
      />
      {audioConValues.paused ? (
        <PlayArrowIcon
          className='icon'
          onClick={() => audioConFunctions.handlePlayPause()}
        />
      ) : (
        <PauseIcon
          className='icon'
          onClick={() => audioConFunctions.handlePlayPause()}
        />
      )}
      <SkipNextIcon
        className='icon'
        onClick={() => handleNextAndPrev('next')}
        sx={
          playlistPos === playlistLenght
            ? { color: darkBlue[100]  }
            : { color: 'white' }
        }
      />
    </S.DivPrincipal>
  )
}

export default MusicCommands
