
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../routes/Home';
import Contact from '../routes/Contact';

function App() {

  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Contact' element={<Contact/>}/>
  </Routes>
  
  
  </BrowserRouter>
      
  )
}

export default App;
