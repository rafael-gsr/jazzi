import { MusicContextProvider } from "@/context/musicContext/_index"
import Home from './pages/index';

const Index = () => {
  return (
    <MusicContextProvider>
      <Home />
    </MusicContextProvider>
  )
}

export default Index