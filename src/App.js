import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/home';
import RiotGames from './pages/riotgames/riotgames';
import Heros from './pages/heros/heros';
import Cinematic from './pages/cinematic/cinematic';

function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route path='/' element={<Home />} /> 
       <Route path='/riotgames' element={<RiotGames/>} />
       <Route path='/heros' element={<Heros />}/>
       <Route path='/cinematic' element={<Cinematic />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
