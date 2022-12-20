// import React from 'react';
import Banner from 'components/Banner/Banner';
import Navbar from 'components/Navbar/Navbar';
import styles from './App.module.scss';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from 'pages/home/home';
import LoginPage from "pages/Login/LoginPage";
import RegisterPage from "pages/Register/RegisterPage";
import {useAuth} from './hooks/use-auth';

function App() {
  return (
    <Router basename="/">
      <div className={styles.App}>
        <Navbar />
        {/* <Banner/> */}
        <div className={styles.content}>
          {/* content */}


          <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<LoginPage /> }  />
            <Route path="/register" element={<RegisterPage /> }  />



          </Routes>
        </div>
        <p>Footer</p>
      </div>

    </Router>

  );
}

export default App;
