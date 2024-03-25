import AudioDisplay from "./components/AudioDisplay";
import DrumPad from "./components/DrumPad";
import PowerControl from "./components/PowerControl";
import VolumeSlider from "./components/VolumeSlider";
import './App.css'

function App() {

  return (
    <main>
        <AudioDisplay />
        <DrumPad />
        <PowerControl />
        <VolumeSlider />
    </main>
  )
}

export default App
