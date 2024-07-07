import { useMusicContext } from '@/app/context/musicContext/_index'
import * as S from './styles'
import { Playlists } from '@/app/assets/_musicsInfo'

const PlayingMusic = () => {
  const [musicState, dispatchMusicState] = useMusicContext()

  dispatchMusicState({type:'SETPLAYLIST', payload: Playlists[1].musics})
  // handlePlaylistPos(1)
  return(
    <S.ContentWrapper>
    </S.ContentWrapper>
  )
}

export default PlayingMusic