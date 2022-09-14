import logo from './logo.png';
import './App.sass';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <img src={logo} alt="football" width={200} />

    </div>
  );
}

export default App;
