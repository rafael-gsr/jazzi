import { useMusicContext } from '@/app/context/musicContext/_index'
import * as S from './styles'
import Image from 'next/image'

const MusicInfos = () => {
  const [ musicState ] = useMusicContext()
  const currentMusic = musicState.playlist[musicState.playlistPos]

  return (
    <>
      { 
        currentMusic && (
          <S.ContentWrapper>
            <Image
              alt={`${currentMusic.title} thumbnail`}
              src={currentMusic.thumb}
              className='thumb'
              />
            <S.TextDiv>
              <S.Title>{currentMusic.title}</S.Title>
              <S.ArtistName>{currentMusic.author}</S.ArtistName>
            </S.TextDiv> 
          </S.ContentWrapper>
        )
      }
    </>
  )
}

export default MusicInfos
