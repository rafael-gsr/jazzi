import ControlBar from "./components/ControlBar/_index"
import { AudioContextProvider } from "./context/audioContext/_index"
import { MusicContextProvider } from "./context/musicContext/_index"

const Index = () => {
  return (
    <MusicContextProvider>
      <AudioContextProvider>
        <ControlBar/>
      </AudioContextProvider>
    </MusicContextProvider>
  )
}

export default Index