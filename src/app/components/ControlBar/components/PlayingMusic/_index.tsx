import { useMusicContext } from '@/app/context/musicContext/_index'
import * as S from './styles'
import { Playlists } from '@/app/assets/_musicsInfo'

const PlayingMusic = () => {
  const { playlist, setPlaylist, setPlaylistPos } = useMusicContext()

  setPlaylist(Playlists[1].musics)
  setPlaylistPos(1)
  return(
    <S.ContentWrapper>
    </S.ContentWrapper>
  )
}

export default PlayingMusic