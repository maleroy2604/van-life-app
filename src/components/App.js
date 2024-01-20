import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import About from '../About';
import '../components.sass/App.sass';

function App() {
  return (
  <div>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/Vans" element={<h1>Vans</h1>} />
    </Routes>
    </BrowserRouter>
    <footer className='block-footer'>
      <p>© 2023 Vanlife</p>
    </footer>
  </div>
  
  
  );
}

export default App;
