import './App.css';
import SearchAppBar from './components/navbar';
import Cards from './components/cards';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';

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
        <Cards />
      </ThemeProvider>
    </>
  );
}

export default App;
