import './App.css';
import AppRoutes from './Routes/AppRoutes';
import Header from './Components/header/Header';
import Footer from './Components/footer/Footer';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <div className="App">
        <Header />
        <AppRoutes />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
