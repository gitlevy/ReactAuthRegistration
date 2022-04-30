import React, { useContext } from 'react'
import SignIn from '../../Components/AuthForm/SignIn'
import SignUp from '../../Components/AuthForm/SignUp'
import NavBar from '../../Components/NavBar/NavBar'
import '../Home/Home.css'
import { AuthContext } from '../../context/AuthContext'

export default function PrivateHome() {
  
  const {logout} = useContext(AuthContext)
 
  return (
    
    <div className="global-container">
        <NavBar />
     
        <SignUp />
        <SignIn />

        <div className="content-container">
            <h1>Voici votre compte privé.</h1>
            <p>Amusez-vous bien !</p>
            <button onClick={logout}>Se déconnecter</button>
        </div>
    </div>
  )
}
