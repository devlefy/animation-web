import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Cursor from "react-special-cursor";
import Header from './components/Header/Header';
import Home from './pages/Home/Home';

function App() {
  
  return (
    
      <>
        <Header />
        <Home />
      </>
  );
}

export default App;
