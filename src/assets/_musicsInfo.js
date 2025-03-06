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

const Authors = {
  frankSinatra: 'Frank Sinatra',
  rayCharles: 'Ray Charles',
  natKingCole: 'Nat King Cole',
  louisArmstrong: 'Louis Armstrong',
  snarkyPuppy: 'Snarky Puppy',
  benEKing: 'Ben E. King',
  daveBrubek: 'Dave Brubeck',
}

const Musics = [
  {
    title: 'Cheek to cheek',
    author: `${Authors.louisArmstrong} and Ella Fitzgerald`,
    archive: cheekToCheek,
    thumb: cheekToCheekThumb,
  },
  {
    title: 'Fly me to the moon',
    author: Authors.frankSinatra,
    archive: flyMeToTheMoon,
    thumb: flyMeToTheMoonThumb,
  },
  {
    title: 'Hit the road jack',
    author: Authors.rayCharles,
    archive: hitTheRoadJack,
    thumb: hitTheRoadJackThumb,
  },
  {
    title: 'I love you baby',
    author: Authors.frankSinatra,
    archive: iLoveYouBaby,
    thumb: iLoveYouBabyThumb,
  },
  {
    title: 'L-O-V-E',
    author: Authors.natKingCole,
    archive: love,
    thumb: loveThumb,
  },
  {
    title: 'La vie en rose',
    author: Authors.louisArmstrong,
    archive: laVieEnRose,
    thumb: laVieEnRoseThumb,
  },
  {
    title: 'Lingus',
    author: Authors.snarkyPuppy,
    archive: lingus,
    thumb: lingusThumb,
  },
  {
    title: 'Stand by me',
    author: Authors.benEKing,
    archive: standByMe,
    thumb: standByMeThumb,
  },
  {
    title: 'Take five',
    author: Authors.daveBrubek,
    archive: takeFive,
    thumb: takeFiveThumb,
  },
  {
    title: 'What a wonderful world',
    author: Authors.louisArmstrong,
    archive: whatAWonderfulWorld,
    thumb: whatAWonderfulWorldThumb,
  },
  {
    title: 'When I fall in love',
    author: Authors.natKingCole,
    archive: whenIFallInLove,
    thumb: whenIFallInLoveThumb,
  },
]

function generateRandomPlaylists(motherPlaylist, length) {
  const createdPlaylist = []
  var usedLength = length

  if (length >= motherPlaylist.length) {
    usedLength = motherPlaylist.length
  }

  for (var i = 0; i < usedLength; i++) {
    var randomElement =
      motherPlaylist[Math.floor(Math.random() * motherPlaylist.length)]

    while (createdPlaylist.includes(randomElement)) {
      randomElement =
        motherPlaylist[Math.floor(Math.random() * motherPlaylist.length)]
    }
    createdPlaylist.push(randomElement)
  }

  return createdPlaylist
}

function generatePlaylistByAuthor(motherPlaylist, author) {
  const createdPlaylist = motherPlaylist.filter((item) => {
    return item.author === author
  })

  return createdPlaylist
}

export const Playlists = {
  byAuthor: [
    {
      title: 'Best Of FrankSinatra',
      musics: generatePlaylistByAuthor(Musics, Authors.frankSinatra),
    },
    {
      title: 'Best of Louis Armstrong',
      musics: generatePlaylistByAuthor(Musics, Authors.louisArmstrong),
    },
    {
      title: 'Best of Nat King Cole',
      musics: generatePlaylistByAuthor(Musics, Authors.natKingCole),
    },
    {
      title: 'Best of Ray Charles',
      musics: generatePlaylistByAuthor(Musics, Authors.rayCharles),
    },
    {
      title: 'Best of Snarky Puppy',
      musics: generatePlaylistByAuthor(Musics, Authors.snarkyPuppy),
    },
    {
      title: 'Best of Ben E. King',
      musics: generatePlaylistByAuthor(Musics, Authors.benEKing),
    },
    {
      title: 'Best of Dave Brubek',
      musics: generatePlaylistByAuthor(Musics, Authors.daveBrubek),
    },
  ],
  random: [
    {
      title: 'Random (discover more musics)',
      musics: generateRandomPlaylists(Musics, 100),
    },
  ],
  allMusics: Musics.map((music) => {
    return {
      title: music.title,
      musics: [ {
        title: music.title,
        author: music.author,
        archive: music.archive,
        thumb: music.thumb,
      },],
    }
  })
}
