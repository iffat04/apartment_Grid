import logo from './logo.svg';
import './App.css';
import AllApartments from './components/AllApartments/AllApartments';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <AllApartments></AllApartments>
    </div>
  );
}

export default App;
