import { Link } from 'react-router-dom';
import React from 'react';
//import './Home.css';
const Home = () =>{
 return (
<div>
 <h1>home</h1>
 <h3>Welcome to our Home Page!</h3>
 <Link to="/Contact">Contact</Link>
</div>
 );
};
export default Home;  
