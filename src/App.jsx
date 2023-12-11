import './App.css';
import React from 'react'
import './pages/Home/Home.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './component/navbar/navbar.jsx';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home/Home.jsx';
import SignUpPage from './pages/SignUp/SignUp.jsx';
import MusicLoginPage from './pages/Music/MusicLogin.jsx';
import MusicMainPage from './pages/Music/MusicPage.jsx';
import LoginPage from './pages/Login/Login.jsx';

function App() {
  return (
    <div className="App">  
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/musiclogin" element={<MusicLoginPage/>} />
        <Route path="/music" element={<MusicMainPage/>} />
        <Route path="/signup" element={<SignUpPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        {/*<Route path="*" element={<NotFoundPage/>} />*/}
      </Routes>
    </div>
  );
}

export default App;
