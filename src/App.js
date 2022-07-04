import logo from './logo.svg';
import NavBar from'./Components/Navbar';
import ItemListContainer from'./Components/ItemListContainer';
import './App.css';
//import './Navbar.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={"Futuro Catalogo"}/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
