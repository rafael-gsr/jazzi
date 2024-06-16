import { useEffect, useRef, useState } from "react"

import cheekToCheek from './music/cheek-to-cheek.luis-armstrong-and-ella-fitzgerald.mp3'
import cheekToCheekThumb from './music/cheek-to-cheek.luis-armstrong-and-ella-fitzgerald.mp3.webp'

import flyMeToTheMoon from './music/fly-me-to-the-moon.frank-sinatra.mp3'
import flyMeToTheMoonThumb from './music/fly-me-to-the-moon.frank-sinatra.mp3.webp'

import hitTheRoadJack from './music/hit-the-road-jack.ray-charles.mp3'
import hitTheRoadJackThumb from './music/hit-the-road-jack.ray-charles.mp3.webp'

import iLoveYouBaby from './music/i-love-you-baby.frank-sinatra.mp3.mp3'
import iLoveYouBabyThumb from './music/i-love-you-baby.frank-sinatra.mp3.mp3.webp'

import love from './music/l-o-v-e.nat-coling-king.mp3'
import loveThumb from './music/l-o-v-e.nat-coling-king.mp3.webp'

import laVieEnRose from './music/la-vie-en-rose.louis-armstrong.mp3'
import laVieEnRoseThumb from './music/la-vie-en-rose.louis-armstrong.mp3.webp'

import lingus from './music/lingus.snarky-puppy.mp3'
import lingusThumb from './music/lingus.snarky-puppy.mp3.jpg'

import standByMe from './music/stand-by-me.ben-e-king.mp3'
import standByMeThumb from './music/stand-by-me.ben-e-king.mp3.webp'

import takeFive from './music/take-five.dave-brubeck.mp3'
import takeFiveThumb from './music/take-five.dave-brubeck.mp3.webp'

import whatAWonderfulWorld from './music/what-a-wonderful-world.louis-armstrong.mp3'
import whatAWonderfulWorldThumb from './music/what-a-wonderful-world.louis-armstrong.mp3.webp'

import whenIFallInLove from './music/when-i-fall-in-love.nat-king-cole.mp3'
import whenIFallInLoveThumb from './music/when-i-fall-in-love.nat-king-cole.mp3.webp'

// AudioRef.current.duration
// AudioRef.current.currentTime
// AudioRef.current.volume "OBS: between 0 and 1"
// AudioRef.current.play()
// AudioRef.current.pause()
// AudioRef.current.ontimeupdate
  
export const Musics = {
  cheekToCheek:{
    title: 'Cheek to cheek',
    author: 'Louis Armstrong and Ella Fitzgerald',
    archive: cheekToCheek,
    thumb: cheekToCheekThumb,
  },
  flyMeToTheMoon:{
    title: 'Fly me to the moon',
    author: 'Frank Sinatra',
    archive: flyMeToTheMoon,
    thumb: flyMeToTheMoonThumb,
  },
  hitTheRoadJack:{
    title: 'Hit the road jack',
    author: 'Ray Charles',
    archive: hitTheRoadJack,
    thumb: hitTheRoadJackThumb,
  },
  iLoveYouBaby:{
    title: 'I love you baby',
    author: 'Frank Sinatra',
    archive: iLoveYouBaby,
    thumb: iLoveYouBabyThumb,
  },
  love:{
    title: 'L-O-V-E',
    author: 'Nat King Cole',
    archive: love,
    thumb: loveThumb,
  },
  laVieEnRose:{
    title: 'La vie en rose',
    author: 'Louis Armstrong',
    archive: laVieEnRose,
    thumb: laVieEnRoseThumb,
  },
  lingus:{
    title: 'Lingus',
    author: 'Snarky Puppy',
    archive: lingus,
    thumb: lingusThumb,
  },
  standByMe:{
    title: 'Stand by me',
    author: 'Ben E. King',
    archive: standByMe,
    thumb: standByMeThumb,
  },
  takeFive:{
    title: 'Take five',
    author: 'Dabe Brubeck',
    archive: takeFive,
    thumb: takeFiveThumb,
  },
  whatAWonderfulWorld:{
    title: 'What a wonderful world',
    author: 'Louis Armstrong',
    archive: whatAWonderfulWorld,
    thumb: whatAWonderfulWorldThumb,
  },
  whenIFallInLove:{
    title: 'When I fall in love',
    author: 'Nat King Cole',
    archive: whenIFallInLove,
    thumb: whenIFallInLoveThumb,
  },  
}


export function logMusics(){
  console.log(Musics)
}