import './App.css';
import SearchAppBar from './components/navbar.jsx';
import Cards from './components/cards.jsx';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import Welcome from './components/welcome.jsx';

const theme = createTheme({
  palette: {
    primary: {
      main: "#202020"
    }
  },
  typography: {
    fontFamily: 'Helvetica'
  }
})

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <SearchAppBar />
        <Welcome />
        <Cards />
      </ThemeProvider>
    </>
  );
}

export default App;
