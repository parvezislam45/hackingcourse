import { Routes,Route } from 'react-router-dom';
import './App.css';
import NavBar from './Components/Home/NavBar';
import Home from './Components/Home/Home';
import Login from './Components/Pages/Login';
import SignUp from './Components/Pages/SignUp';

function App() {
  return (
    <div className="App">
     <NavBar></NavBar>
     <Routes>
      <Route path ='/' element ={<Home></Home>}></Route>
      <Route path ='/home' element ={<Home></Home>}></Route>
      <Route path ='/login' element ={<Login></Login>}></Route>
      <Route path ='/signup' element ={<SignUp></SignUp>}></Route>
     </Routes>
    </div>
  );
}

export default App;
