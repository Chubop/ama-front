import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import SignIn from './auth/SignIn';
import Home from './components/Home';
import './style.css'; 


const theme = createTheme({
  typography: {
    fontFamily: [
      'Courier New'
    ],
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/signin" element={<SignIn/>}/>
          </Routes>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
