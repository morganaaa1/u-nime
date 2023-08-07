import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Popular from './components/Popular';

function App() {

  return (
    <BrowserRouter>
      <>
        <Navbar/>
        <Popular/>
      </>
    </BrowserRouter>
  );
}

export default App;
