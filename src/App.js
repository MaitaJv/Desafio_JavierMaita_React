import NavBar from'./Components/Navbar';
import {Outlet, Link } from "react-router-dom";
import './App.css';
//import './Navbar.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Outlet />
    </div>
  );
}

export default App;
