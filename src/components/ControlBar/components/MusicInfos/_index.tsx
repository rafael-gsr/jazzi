import { useMusicContext } from '@/context/musicContext/_index'
import './styles.scss'
import Image from 'next/image'

const MusicInfos = () => {
  const [musicState] = useMusicContext()
  const currentMusic = musicState.playlist[musicState.playlistPos]
  return (
    <>
      {currentMusic && (
        <div className='music_infos'>
          <Image
            alt={`${currentMusic.title} thumbnail`}
            src={currentMusic.thumb}
            className='music_infos__thumb'
            priority
          />
          <div className='music_infos__content'>
            <h2 className='music_infos__content__title'>
              {currentMusic.title}
            </h2>
            <p className='music_infos__content__artist_name'>
              {currentMusic.author}
            </p>
          </div>
        </div>
      )}
    </>
  )
}

export default MusicInfos
