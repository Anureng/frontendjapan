import './App.css';
import Navbar from './components/Navbar';
import FetchData from './components/FetchData';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Job from './components/Job';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Job' element={<FetchData />} />
          <Route path='/About' element={<About />} />
          <Route path='/Job/:id' element={<Job />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
