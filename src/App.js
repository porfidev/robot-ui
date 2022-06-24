import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { io } from 'socket.io-client';
import { RequireAuth } from './components/RequireAuth.js';
import { ApiContext } from './contexts/apiContext.js';
import { AuthContext } from './contexts/authContext.js';
import { AddTextToSpeechAlert } from './views/AddTextToSpeechAlert.jsx';
import Alerted from './views/Alerted.jsx';
import AlertsMenu from './views/AlertsMenu.jsx';
import Demo from './views/Demo.jsx';
import LoginView from './views/Login.jsx';
import Main from './views/Main.jsx';
import ManualNavigation from './views/ManualNavigation.jsx';
import MappingNavigation from './views/MappingNavigation.jsx';
import NavigationControl from './views/NavigationControl.jsx';
import NavigationMode from './views/NavigationMode.jsx';
import TextToSpeeach from './views/TextToSpeeach.jsx';
import Presentation from './views/Presentation.jsx';

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
});

const ApiProvider = ({children}) => {
  const [robotUrl, setRobotUrl] = useState(process.env.REACT_APP_SOCKET_BASE_URL);

  // TODO: update when change URL ROBOT
  // Connect on demand
  const socket = io(robotUrl, {
    extraHeaders: {
      'Bypass-Tunnel-Reminder': 'Octopy'
    }
  });

  const changeRobotUrl = (url) => {
    setRobotUrl(url);
  };

  const apiProviderValue = {robotUrl, changeRobotUrl, socket};
  return <ApiContext.Provider value={apiProviderValue}>{children}</ApiContext.Provider>;
};

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  const logIn = (userData, callback) => {
    // FAKE AUTH
    if (userData) {
      setUser({
        userName: userData.userName
      });
      callback();
    }
  };

  const logOut = (callback) => {
    setUser(null);
    callback();
  };

  const authProviderValue = {user, logIn, logOut};

  return <AuthContext.Provider value={authProviderValue}>{children}</AuthContext.Provider>;
};

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <ApiProvider>
        <AuthProvider>
          <div className="App">
            <Routes>
              <Route path="/" element={<Presentation/>}/>
              <Route path="/login" element={<LoginView/>}/>
              <Route path="/alerted" element={<Alerted/>}/>
              <Route path="/drawer" element={<AlertsMenu/>}/>
              <Route path="/navigation" element={<NavigationMode/>}/>
              <Route path="/text-to-speach" element={<TextToSpeeach/>}/>
              <Route path="/add-text-to-speach" element={<AddTextToSpeechAlert/>}/>
              <Route path="/navigation-control" element={<NavigationControl/>}/>
              <Route path="/manual-navigation" element={<ManualNavigation/>}/>
              <Route path="/mapping-navigation" element={<MappingNavigation/>}/>
              <Route path="/main" element={<Main/>}/>
              <Route path="/admin"
                     element={<RequireAuth>
                       <Main/>
                     </RequireAuth>}>

              </Route>
            </Routes>
          </div>
        </AuthProvider>
      </ApiProvider>
    </ThemeProvider>
  );
}

export default App;
