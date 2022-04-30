import React from 'react'
import SignIn from '../../Components/AuthForm/SignIn'
import SignUp from '../../Components/AuthForm/SignUp'
import NavBar from '../../Components/NavBar/NavBar'
import './Home.css'

export default function Home() {
  return (
    <div className="global-container">
        <NavBar />
        <div className="content-container">
            <h1>Bienvenue sur le site.</h1>
            <p>Authentifiez-vous pour accéder aux fonctionnalités.</p>
        </div>
        
        <SignUp />
        <SignIn />
    </div>
  )
}
