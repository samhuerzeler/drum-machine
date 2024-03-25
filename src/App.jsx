import { useState } from "react";
import AudioDisplay from "./components/AudioDisplay";
import AudioSource from "./components/AudioSource";
import DrumPad from "./components/DrumPad";
import PowerControl from "./components/PowerControl";
import VolumeSlider from "./components/VolumeSlider";
import './App.css'
import VolumeDisplay from "./components/VolumeDisplay";

function App() {
  const [volume, setVolume] = useState(50);
  const [audioDisplayName, setAudioDisplayName] = useState("");
  const [powerOn, setPowerOn] = useState(true);

  return (
    <main>
      <div id="drum-machine">

        <div className="pads">
          {AudioSource.map((pad) => (
            <DrumPad key={pad.id} pad={pad} setAudioDisplayName={setAudioDisplayName} powerOn={powerOn} volume={volume} />
          ))}
        </div>

        <div className="displays">
          <VolumeDisplay volume={volume} powerOn={powerOn} />
          <AudioDisplay audioDisplayName={audioDisplayName} powerOn={powerOn} />
        </div>

        <div className="controllers">
          <PowerControl powerOn={powerOn} setPowerOn={setPowerOn} setAudioDisplayName={setAudioDisplayName} />
          <VolumeSlider setVolume={setVolume} />
        </div>

      </div>
    </main>
  )
}

export default App
