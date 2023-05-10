// import './style.css';

import Header from './Header';
import { Routes, Route } from 'react-router-dom';
import Home from '../routes/Home';
import Login from '../routes/Login';
import Register from '../routes/Register';

function App() {
  return (
    <div className='container'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
