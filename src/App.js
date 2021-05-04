import './App.css';
import Companies from './components/Companies';
import Landing from './components/Landing';
import Offers from './components/Offers';


function App() {
  return (
    <div className="App">
      <Landing />
      <Offers />
      <Companies />
    </div>
  );
}

export default App;
