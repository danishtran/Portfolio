import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import RfidSpotifyPlayer from "./pages/projects/RfidSpotifyPlayer";
import ArduinoDinoGame from "./pages/projects/ArduinoDinoGame";
import YoctoSpotifyDisplay from "./pages/projects/YoctoSpotifyDisplay";
import Esp32WeatherStation from "./pages/projects/Esp32WeatherStation";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects/rfid-spotify-player" element={<RfidSpotifyPlayer />} />
        <Route path="/projects/arduino-dino-game" element={<ArduinoDinoGame />} />
        <Route path="/projects/yocto-spotify-display" element={<YoctoSpotifyDisplay />} />
        <Route path="/projects/esp32-weather-station" element={<Esp32WeatherStation />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
