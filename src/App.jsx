import './App.css';
import Navbar from './components/Navbar';
import Popular from './components/Popular';
import { useGlobalContext } from './context/global';

function App() {

  const global = useGlobalContext();
  console.log(global)

  return (
    <>
      <Navbar/>
      <Popular/>
    </>
  );
}

export default App;
