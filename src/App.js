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
    </div>
  );
}

export default App;
