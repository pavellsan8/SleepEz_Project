import './musicContent.css';
import React, { useEffect, useState } from 'react'
import { setClientToken } from '../../../spotify';
import Sidebar from '../../sidebar/sidebar';
//import axios from 'axios';

function MusicContent() {
  const [token, setToken] = useState('');

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    setToken(storedToken || '');
    if (storedToken) {
      setClientToken(storedToken);
      //console.log(storedToken);
    }
  }, []); 

  useEffect(() => {
    const hash = window.location.hash;
    window.location.hash = '';

    if (hash) {
      const _token = hash.substring(1).split('&').find(elem => elem.startsWith('access_token')).split('=')[1];
      window.localStorage.setItem('token', _token);
      setToken(_token);
      setClientToken(_token);
    }
  }, []);

  return (
    <div>
      {
        token && 
        <div className='main-body-music'>
          <Sidebar/>
        </div>
      }
    </div>
  )
}

export default MusicContent