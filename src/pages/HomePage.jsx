import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';



const HomePage = () => {
  return (
    <div>       
        <Header/>
    <Main />   
      <h1>Welcome to the Home Page</h1>
      <p>This is the home page content.</p>
    </div>
  );
};

export default HomePage;