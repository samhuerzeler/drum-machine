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

        {AudioSource.map((pad) => (
          <DrumPad key={pad.id} pad={pad} setAudioDisplayName={setAudioDisplayName} powerOn={powerOn} volume={volume} />
        ))}

        <PowerControl powerOn={powerOn} setPowerOn={setPowerOn} setAudioDisplayName={setAudioDisplayName} />

        <VolumeSlider setVolume={setVolume} />
    </main>
  )
}

export default App
