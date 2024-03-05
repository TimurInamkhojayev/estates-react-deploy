import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { SpeedInsights } from "@vercel/speed-insights/react"
import { AuthProvider } from './components/context/AuthContext'
import PrivateRoute from './components/misc/PrivateRoute'
import Navbar from './components/misc/Navbar'
import Home from './components/home/Home'
import Login from './components/home/Login'
import Signup from './components/home/Signup'
import OAuth2Redirect from './components/home/OAuth2Redirect'
import AdminPage from './components/admin/AdminPage'
import UserPage from './components/user/UserPage'
import About from "./components/About";



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeW13a3xTaXbjnxnDNmLP0AFFiwWiqajQ",
  authDomain: "estates-alm.firebaseapp.com",
  projectId: "estates-alm",
  storageBucket: "estates-alm.appspot.com",
  messagingSenderId: "305611111046",
  appId: "1:305611111046:web:95efb4740940fa42f2af07",
  measurementId: "G-S59TZXQ5W6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);





function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/oauth2/redirect' element={<OAuth2Redirect />} />
          <Route path="/adminpage" element={<PrivateRoute><AdminPage /></PrivateRoute>}/>
          <Route path="/userpage" element={<PrivateRoute><UserPage /></PrivateRoute>}/>
          <Route path="*" element={<Navigate to="/" />}/>
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
