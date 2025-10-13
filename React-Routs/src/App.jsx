import { useState } from 'react';
import { BrowserRouter, Outlet, Route } from 'react-router-dom';
import './App.css'
import{ createBrowserRouter, RouterProvider }from 'react-router-dom';
import Home from '../routes/Home';
import Contact from '../routes/Contact';

function App() {

  return (
  <BrowserRouter>
  <Route>
 <Route path='/' element={<Home/>}/>
  <Route path='/Contact' element={<Contact/>}/>
  <Outlet/>

  </Route>
  
  
  </BrowserRouter>
      
  )
}

export default App;
