
import './App.css';
import Login from './components/Login';
import Recovery from './components/Recovery';
import Signup from './components/Signup';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Signup/>} />
    <Route path='login' element={<Login/>}/>
    <Route path='/forget' element={<Recovery/>}/>
   </Routes>
   </BrowserRouter>
   
  
   </>
  );
}

export default App;
