import ControlBar from "./components/ControlBar/_index"
import { MusicContextProvider } from "./context/musicContext/_index"

const Index = () => {
  return (
    <MusicContextProvider>
      <ControlBar/>
    </MusicContextProvider>
  )
}

export default Index