import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './App.css';
import HomeView from './views/Home.jsx';
import LoginView from './views/Login.jsx';

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <h1>React Octopy Robot Navigation</h1>
        <Routes>
          <Route path="/" element={<HomeView/>}/>
          <Route path="/login" element={<LoginView/>}/>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
