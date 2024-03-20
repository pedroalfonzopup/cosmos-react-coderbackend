import React from 'react'
import ReactDOM from 'react-dom/client'
import LandingPage from './pages/LandingPage/LandingPage.jsx'
import Footer from "./components/Footer/Footer.jsx"
import Navbar from "./components/Navbar/Navbar.jsx"

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <LandingPage />
    <Footer />
  </React.StrictMode>,
)
