import axios from 'axios';

const authEndPoint = 'https://accounts.spotify.com/authorize?';
const cliendId = '96e5626f2b2a449abf941a88333e8e73';
const redirectUrl = 'http://localhost:3000/music';
const scopes = [
    'user-read-private',
    'user-read-email',
    'user-modify-playback-state',
    'user-read-playback-state',
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-top-read',
    'playlist-read-collaborative']

export const loginEndpoint = `${authEndPoint}client_id=${cliendId}&redirect_uri=${redirectUrl}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
  
  const apiClient = axios.create({
    baseURL: "https://api.spotify.com/v1/",
  });
  
  export const setClientToken = (token) => {
    apiClient.interceptors.request.use(async function (config) {
      config.headers.Authorization = "Bearer " + token;
      return config;
    });
  };
  
  export default apiClient;