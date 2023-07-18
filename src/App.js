import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage';
import About from './pages/about';

function App() {
  
  return (
   <>
   <BrowserRouter><Routes>
    <Route path='/' index element={<Homepage />}></Route>
    <Route path='/about' element={<About />}></Route>
    
    </Routes></BrowserRouter>
   </>
  );
}

export default App;
