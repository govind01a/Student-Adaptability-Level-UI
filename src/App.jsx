import './App.css';
import AppRoutes from './Routes/AppRoutes';
import Header from './Components/header/Header';
import Footer from './Components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
