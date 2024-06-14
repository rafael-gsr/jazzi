'use client'

import PauseIcon from '@mui/icons-material/Pause'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious'
import SkipNextIcon from '@mui/icons-material/SkipNext'
import * as S from './styles'
import { useState } from 'react'
import { grayscale } from '@/app/styles/colors'

const MusicCommands = () => {
  const playlistLenght = 15

  const [paused, setPaused] = useState<boolean>(true)
  const [playlistPos, setPlaylistPos] = useState<number>(0)

  function handleOnPause() {
    setPaused(!paused)
  }

  function handleNextAndPrev(nextOrPrev: 'next' | 'prev') {
    switch (nextOrPrev) {
      case 'next':
        if (playlistPos < playlistLenght) {
          setPlaylistPos(playlistPos + 1)
          setPaused(false)
          return
        }
        break
      case 'prev':
        if (playlistPos > 0) {
          setPlaylistPos(playlistPos - 1)
          setPaused(false)
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
        sx={playlistPos === 0 ? { color: grayscale[100] } : { color: 'white' }}
      />
      {paused ? (
        <PlayArrowIcon
          className='icon'
          onClick={handleOnPause}
        />
      ) : (
        <PauseIcon
          className='icon'
          onClick={handleOnPause}
        />
      )}
      <SkipNextIcon
        className='icon'
        onClick={() => handleNextAndPrev('next')}
        sx={
          playlistPos === playlistLenght
            ? { color: grayscale[100] }
            : { color: 'white' }
        }
      />
    </S.DivPrincipal>
  )
}

export default MusicCommands
