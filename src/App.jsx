import { useState } from "react";
import AudioDisplay from "./components/AudioDisplay";
import AudioSource from "./components/AudioSource";
import DrumPad from "./components/DrumPad";
import PowerControl from "./components/PowerControl";
import VolumeSlider from "./components/VolumeSlider";
import './App.css'

function App() {
  const [volume, setVolume] = useState(50);
  const [audioDisplayName, setAudioDisplayName] = useState("");
  const [powerOn, setPowerOn] = useState(true);

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
