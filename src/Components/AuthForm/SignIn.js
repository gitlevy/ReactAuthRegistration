import React, { useState, useContext, useRef } from 'react'
import './AuthForm.css'
import { useDispatch, useSelector } from 'react-redux'
import { AuthContext } from '../../context/AuthContext'
import { useHistory } from 'react-router-dom'

export default function SignIn() {

  const [error, setError] = useState("")
  const history = useHistory()
  const { login } = useContext(AuthContext)

  const showModal = useSelector(state => state)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
       await login(inputs.current[0].value, inputs.current[1].value)
       history.push("/loggedHome")
       closeModal()
    } catch {
      setError("Email et/ou mot de passe incorrect(s).")
    }
  }

  const dispatch = useDispatch()

  const closeModal = () => {
    dispatch({
      type: "CLOSEMODAL"
    })
  }

  const toggleSignUp = () => {
    dispatch({
      type: "TOGGLEUP"
    })
  }

  const inputs = useRef([])

  const addInput = (input) => {
    if (input && !inputs.current.includes(input)) {
       inputs.current.push(input)
    }
  }

  return (
    <div className={showModal.showSignIn ? "global-modal" : "hide-modal"}>
        <div onClick={closeModal} className="overlay"></div>

        <div className="container-modal">
             <form onSubmit={handleSubmit} className="form-auth">
                 <h2>CONNEXION</h2>

                 <label htmlFor="email">Votre mail</label>
                 <input ref={addInput} type="email" id="email" required />

                 <label htmlFor="password">Votre mot de passe</label>
                 <input ref={addInput} type="password" id="password" required />

                 {error}

                 <button className="btn-sign">Se connecter</button>
             </form>

             <button onClick={closeModal} className="btn-close">X</button>
             <p onClick={toggleSignUp} className="button-help-txt">Besoin de créer un compte ?</p>
        </div>
    </div>
  )
}
