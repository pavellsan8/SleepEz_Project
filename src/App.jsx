import './App.css';
import React, { useEffect } from 'react'
import './pages/Home/Home.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './component/navbar/navbar.jsx';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home/Home.jsx';
import SignUpPage from './pages/SignUp/SignUp.jsx';
import MusicPage from './pages/Music/Music.jsx';
// import { reducerCases } from './utils/constant.jsx';
// import { useStateProvider } from './utils/StateSupports.jsx';
// import MusicLogin from './component/content/musicContent/musicLogin.jsx';
// import MusicContent from './component/content/musicContent/musicContent.jsx';

function App() {
  // const [{ token }, dispatch] = useStateProvider();
  // useEffect(() => {
  //   const hash = window.location.hash;
  //   if (hash) {
  //     const token = hash.substring(1).split("&")[0].split("=")[1];
  //     if (token) {
  //       dispatch({ type: reducerCases.SET_TOKEN, token });
  //       return token;
  //     }
  //   }
  //   document.title = "Spotify";
  // }, [dispatch, token]);

  return (
      <div className="App">  
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/home" element={<HomePage/>} />
          <Route path="/music" element={<MusicPage/>} />
          <Route path="/signup" element={<SignUpPage/>} />
        </Routes>

        {/* {token ? <MusicContent /> : <MusicLogin />} */}
      </div>
  );
}

export default App;
