import { BrowserRouter , Route , Routes } from 'react-router-dom';
import './App.css';
import Buypage from './Project/Buypage';
import Rentpage from './Project/Rentpage';
import ForgetPassword from './Project/ForgetPassword';
import FilterPage from './Project/FilterPage';
import Home from './Project/Home';
import Login from './Project/Login';
import SignUpPage from './Project/SignUp';
import NavBar from './Project/NavBar';
import BottomBar from './Project/BottomBar';
import FinalBuy1 from './Project/FinalBuy1';
import Dashboard from './Project/Dashboard';
import FinalRent1 from './Project/FinalRent1';
import Account from './Project/Account';

function App() {
  return (
    <div className='App'>
    <BrowserRouter>
    <Routes>
    <Route path="/Home" element={<Home/>}></Route>
    <Route path="/" element={<Login/>}></Route>
    <Route path="/SignUp" element={<SignUpPage/>}></Route>
    <Route path="/ForgetPassword" element={<ForgetPassword/>}></Route>
    <Route path="/Rentpage" element={<Rentpage/>}></Route>
    <Route path="/Buypage" element={<Buypage/>}></Route>
    <Route path="/FilterPage" element={<FilterPage/>}></Route>
    <Route path='/NavBar' element={<NavBar/>}></Route>
    <Route path='/BottomBar' element={<BottomBar/>}></Route>
    <Route path='/Dashboard' element={<Dashboard/>}></Route>
    <Route path='/FinalBuy1' element={<FinalBuy1/>}></Route>
    <Route path='/FinalRent1' element={<FinalRent1/>}></Route>
    <Route path='/Account' element={<Account/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  )
}
export default App;