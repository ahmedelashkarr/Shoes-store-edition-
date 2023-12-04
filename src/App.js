import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import { Fragment } from 'react';
import Login from './components/another-pages/Login/Login';
import Register from './components/another-pages/register/Register';
import Details from './components/another-pages/details/Details';


function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='' element={<Home />}></Route>
        <Route path='new-in/' element={<Fragment></Fragment>}></Route>
        <Route path='login/' element={<Login />}></Route>
        <Route path='register/' element={<Register />}></Route>
        <Route path='details/:id' element={<Details />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
