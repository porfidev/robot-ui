import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Route, Routes } from 'react-router-dom';
import { io } from 'socket.io-client';
import { ApiContext } from './contexts/apiContext.js';
import { AddTextToSpeechAlert } from './views/AddTextToSpeechAlert.jsx';
import Alerted from './views/Alerted.jsx';
import AlertsMenu from './views/AlertsMenu.jsx';
import Index from './views/Index.jsx';
import LoginView from './views/Login.jsx';
import Main from './views/Main.jsx';
import ManualNavigation from './views/ManualNavigation.jsx';
import MapNavigation from './views/MapNavigation.jsx';
import NavigationControl from './views/NavigationControl.jsx';
import NavigationMode from './views/NavigationMode.jsx';
import TextToSpeeach from './views/TextToSpeeach.jsx';

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
});

const robotUrl = process.env.REACT_APP_SOCKET_BASE_URL;

const socket = io(robotUrl, {
  extraHeaders: {
    'Bypass-Tunnel-Reminder': 'Octopy'
  }
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <ApiContext.Provider value={{robotUrl: robotUrl}}>
        <div className="App">
          <Routes>
            <Route path="/" element={<Index/>}/>
            <Route path="/login" element={<LoginView/>}/>
            <Route path="/alerted" element={<Alerted/>}/>
            <Route path="/main" element={<Main/>}/>
            <Route path="/drawer" element={<AlertsMenu/>}/>
            <Route path="/navigation" element={<NavigationMode/>}/>
            <Route path="/text-to-speach" element={<TextToSpeeach/>}/>
            <Route path="/add-text-to-speach" element={<AddTextToSpeechAlert/>}/>
            <Route path="/navigation-control" element={<NavigationControl/>}/>
            <Route path="/manual-navigation" element={<ManualNavigation socket={socket}/>}/>
            <Route path="/map-navigation" element={<MapNavigation socket={socket}/>}/>
          </Routes>
        </div>
      </ApiContext.Provider>
    </ThemeProvider>
  );
}

export default App;
