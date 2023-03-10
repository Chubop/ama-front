import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import CreatePage from './pages/CreatePage';
import Home from './pages/Home';
import SignIn from './auth/SignIn';
import Home from './components/Home';
import NavBar from './components/NavBar';
import './style.css'; 


const theme = createTheme({
  typography: {
    // fontFamily: [
    //   ''
    // ],
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <header className="App-header">
          <NavBar/>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/createpage" element={<CreatePage/>}/>
          </Routes>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
