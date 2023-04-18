import './App.css';
import React from 'react';
import Nav from "./pages/nav"
import Home from "./pages/main"
import Tictac from "./pages/tictac"
import Slido from './pages/slido';
import Tower from "./pages/tower"
import Snek from "./pages/snek"
import FooterBar from "./pages/footer"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter style={{margin: '0px'}}>
      <Nav />
      <main>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/slido" element={<Slido />}/>
        <Route path="/tictactoe" element={<Tictac />}/>
        {/* <Route path="/tower" element={<Tower/>}/>
        <Route path="/snek" element={<Snek />}/> */}
      </Routes>  
      </main>
      
      <FooterBar />
    </BrowserRouter>
  );
}

export default App;
