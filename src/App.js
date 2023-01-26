import { Autocomplete, createTheme, CssBaseline, Grid, Input, TextField, ThemeProvider } from '@mui/material';
import Content from './components/Content';
import './style.css';


const theme = createTheme({
  typography: {
    fontFamily: [
      'Courier New'
    ]
  },
});

const options = [
  "The quick brown fox jumps over the lazy dog",
  "Hello, world!",
  "Foo bar baz",
  "Lorem ipsum dolor sit amet"
];


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <header className="App-header">
          <Content style={{textAlign: 'center'}}>
            <Grid item>Welcome!</Grid>
            <Grid item>
              Ask a question. I'll answer it - now, or later.
            </Grid>
            <Grid item sx={{width: '50%'}}>
              <Autocomplete
                options={options}
                sx={{position: 'relative'}}
                renderInput={params => (
                  <TextField
                    {...params}
                    label="When do you close?"
                    variant="outlined"
                  />
                )}
              />
            </Grid>
          </Content>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
