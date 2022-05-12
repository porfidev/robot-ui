import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './App.css';
import Alerted from './views/Alerted.jsx';
import DrawerMenu from './views/DrawerMenu.jsx';
import HomeView from './views/Home.jsx';
import LoginView from './views/Login.jsx';
import Main from './views/Main.jsx';
import NavigationMode from './views/NavigationMode.jsx';

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
          <Route path="/" element={<HomeView/>}/>
          <Route path="/login" element={<LoginView/>}/>
          <Route path="/alerted" element={<Alerted />} />
          <Route path="/main" element={<Main />} />
          <Route path="/drawer" element={<DrawerMenu />} />
          <Route path="/navigation" element={<NavigationMode />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
