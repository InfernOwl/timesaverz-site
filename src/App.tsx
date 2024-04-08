import React from 'react';
import logo from './logo.svg';
import './styles/App.css';
import Body from './components/Body';
import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Sweepstakes from './components/Sweepstakes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App: React.FC = () => (
  <div className="App">
    <Navbar></Navbar>
    <div className="page_container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="races" element={<Body />}></Route>
          <Route path="sweepstakes" element={<Sweepstakes />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    <Footer></Footer>
  </div>
);

export default App;
