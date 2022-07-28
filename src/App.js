import Navbar from './components/Navbar';
import Drawer from './components/Drawer';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Authentication/Login';

function App() {
  return (
    <div className=''>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Drawer />} />
        <Route path='login' element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
