import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


import LandingPage from './components/pages/LandingPage'
import LoginPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'
import ForgetPasswordPage from './components/pages/ForgetPasswordPage'
import HomePage from './components/pages/HomePage'


import './App.css'

export default function App() {
    return (
        <Router>

            <div>
            <header />
                <Switch>

               
                    <Route exact path="/" component={ LandingPage } />
                    <Route path="/login" component={ LoginPage } />
                    <Route path="/register" component={ RegisterPage } />
                    <Route path="/forget-password" component={ ForgetPasswordPage } />
                    <Route path="/home" component={ HomePage } />
                </Switch>
               
                <Footer />
            </div>
        </Router>
    )
}

const Footer = () => {
    return (
        <p className="text-center" style={ FooterStyle }>Designed & coded by 
        <a href="#" target="_blank" rel="noopener noreferrer">Maveric</a></p>
    )
}

const Header = () => {

return(

  <nav clasName="navbar navbar-expand-lg bg-light" style={headerStyle}>
<div clasName="container-fluid">
  <a clasName="navbar-brand" href=".assets/images/header-logo.png">Maveric</a>
  <button clasName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span clasName="navbar-toggler-icon"></span>
  </button>
  <div clasName="collapse navbar-collapse" id="navbarSupportedContent">
    <ul clasName="navbar-nav me-auto mb-2 mb-lg-0">
      <li clasName="nav-item">
        <a clasName="nav-link active" aria-current="page" href="#">Home</a>
      </li>   
      <li clasName="nav-item">
        <a clasName="nav-link" href="#">Link</a>
      </li>
    
    </ul>
    <form clasName="d-flex" role="search">
      <input clasName="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button clasName="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</div>
</nav>
)

}



const FooterStyle = {
    background: "#222",
    fontSize: ".8rem",
    color: "#fff",
    position: "absolute",
    bottom: 0,
    padding: "1rem",
    margin: 0,
    width: "100%",
    opacity: ".5",
    position: "fixed"
}

const headerStyle= {
  background: "#222",
    padding: "10px",
    text: "center",
    background: "#222",
    position: "absolute",
    top:0,
    color: "#fff",
    padding : "1rem",
    margin: 0,
    width: "100%",
    opacity: ".5",
    position: "fixed"
}