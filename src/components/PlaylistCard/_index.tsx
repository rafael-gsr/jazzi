import { useMusicContext } from '@/context/musicContext/_index'
import Image from 'next/image'
import { PlaylistProps } from '@/context/musicContext/types'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import './styles.scss'

const PlaylistCard = (playlist: PlaylistProps) => {
  const [_, dispatchMusicState] = useMusicContext()
  const currentMusic = playlist.musics[Math.floor(Math.random() * playlist.musics.length)]

  return (
    <div className='keen-slider__slide'>
      <article className='article_wrapper'>
        <div className='article_wrapper__thumb_container'>
            <Image
              className='article_wrapper__thumb_container__image'
              src={currentMusic.thumb}
              width={250}
              height={250}
              alt={`${currentMusic.title} image from ${currentMusic.author}`}
              placeholder='empty'
            />
          <PlayArrowIcon
            className='article_wrapper__thumb_container__play_icon'
            onClick={() => {
              dispatchMusicState({
                type: 'SETPLAYLIST',
                payload: playlist.musics,
              })
              dispatchMusicState({ type: 'SETPLAYLISTPOS', payload: 0 })
            }}
          />
        </div>
        <h3 className='article_wrapper__title'>{playlist.title}</h3>
      </article>
    </div>
  )
}

export default PlaylistCard
