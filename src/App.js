import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { AddTextToSpeechAlert } from './views/AddTextToSpeechAlert.jsx';
import Alerted from './views/Alerted.jsx';
import AlertsMenu from './views/AlertsMenu.jsx';
import Index from './views/Index.jsx';
import LoginView from './views/Login.jsx';
import Main from './views/Main.jsx';
import NavigationControl from './views/NavigationControl.jsx';
import NavigationMode from './views/NavigationMode.jsx';
import TextToSpeeach from './views/TextToSpeeach.jsx';

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Index/>}/>
          <Route path="/login" element={<LoginView/>}/>
          <Route path="/alerted" element={<Alerted />} />
          <Route path="/main" element={<Main />} />
          <Route path="/drawer" element={<AlertsMenu />} />
          <Route path="/navigation" element={<NavigationMode />} />
          <Route path="/text-to-speach" element={<TextToSpeeach />} />
          <Route path="/add-text-to-speach" element={<AddTextToSpeechAlert />} />
          <Route path="/navigation-control" element={<NavigationControl />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
