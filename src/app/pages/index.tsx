
import ControlBar from "@/components/ControlBar/_index" 
import Header from "@/components/Header/_index"
import './styles.scss'
import { Playlists } from "@/assets/_musicsInfo"
import PlaylistCarousel from "@/components/PlaylistCarousel"
import Footer from "@/components/Footer"

const Home = () => {
  return(
  <section className='home_wrapper'>
    <Header/>
    <ControlBar />      
    <PlaylistCarousel
      name="Main Playlists"
      cardsList={Playlists.byAuthor}
    />
    <PlaylistCarousel
      name='Random'
      cardsList={Playlists.random}
    />
    <PlaylistCarousel
      name='All musics'
      cardsList={Playlists.allMusics as any[]}
    />
    <Footer />
  </section>
)
}

export default Home