import { Routes,Route } from 'react-router-dom';
import './App.css';
import NavBar from './Components/Home/NavBar';
import Home from './Components/Home/Home';
import Login from './Components/Pages/Login';
import SignUp from './Components/Pages/SignUp';
import Footer from './Components/Home/Footer';
import FullCourse from './Components/Home/FullCourse';
import RequireAuth from './Components/Home/RequireAuth';

function App() {
  return (
    <div className="App">
     <NavBar></NavBar>
     <Routes>
      <Route path ='/' element ={<Home></Home>}></Route>
      <Route path ='/home' element ={<Home></Home>}></Route>
      <Route path ='/login' element ={<Login></Login>}></Route>
      <Route path ='/signup' element ={<SignUp></SignUp>}></Route>
      <Route path ='/allitem' element ={<RequireAuth><FullCourse></FullCourse></RequireAuth>}></Route>
     </Routes>
     <div className="mt-6">
     <Footer></Footer>
     </div>
    
    </div>
  );
}

export default App;
