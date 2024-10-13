import './App.css';
import AppRoutes from './Routes/AppRoutes';
import Header from './Components/header/Header';
import Footer from './Components/footer/Footer';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <AppRoutes />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
