import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './layout/Layout';
import Home from './pages/home/Home';
import Play from './pages/Play/Play';
import About from './pages/about/About';
import NoPage from './pages/noPage/NoPage';
import ChatGpt from './pages/protfolio/ChatGPT/ChatGpt';
import Govenda from './pages/protfolio/govenda/Govenda';






function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="play" element={<Play />} />
          <Route path="about" element={<About />} />
          <Route path="/protfolio/chatgpt" element={<ChatGpt />} />
          <Route path="/protfolio/govenda" element={<Govenda />} />



          <Route path="*" element={<NoPage />} />

        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
