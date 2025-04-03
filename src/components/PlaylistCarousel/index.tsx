'use client'

import './styles.scss'
import PlaylistCard from '../PlaylistCard/_index'
import { useKeenSlider } from 'keen-slider/react'
import { useEffect, useState } from 'react'
import Arrow from './components/Arrow/Arrow'
import { PlaylistCarouselProps } from './types'
import LoadingPlaceholder from './components/LoadingPlaceholder'

const PlaylistCarousel = ({ cardsList, name }: PlaylistCarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0)
  const [loaded, setLoaded] = useState<boolean>(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 1,
    slides: {
      perView: 1,
      spacing: 15,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    breakpoints: {
      '(min-width: 768px)': {
        slides: {
          perView: 2,
        },
      },
      '(min-width: 1024px)': {
        slides: {
          perView: 3,
        },
      },
      '(min-width: 1440px)': {
        slides: {
          perView: 4,
        },
      },
      '(min-width: 1920px)': {
        slides: {
          perView: 5,
        },
      },
    },
  })

  useEffect(() => {
    setLoaded(true)
  }, [sliderRef])

  const carousel = (
    <div
      ref={sliderRef}
      className='keen-slider carousel'
    >
      {cardsList.map((playlist, index) => (
        <PlaylistCard
          key={`card${index}`}
          title={playlist.title}
          musics={playlist.musics}
        />
      ))}
      <>
        <Arrow
          left
          onClick={(e: any) =>
            e.stopPropagation() || instanceRef.current?.prev()
          }
          disabled={currentSlide === 0}
        />

        <Arrow
          onClick={(e: any) =>
            e.stopPropagation() || instanceRef.current?.next()
          }
          disabled={
            instanceRef.current != undefined &&
            currentSlide === instanceRef.current.track.details.slides.length - 1
          }
        />
      </>
    </div>
  )

  return (
    <>
      <h3 className='playlist_title'>
        {name}
        <div className='playlist_title__divisor' />
      </h3>
      {loaded ? carousel : <LoadingPlaceholder />}
    </>
  )
}

export default PlaylistCarousel
