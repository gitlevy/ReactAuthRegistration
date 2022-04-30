import React, { useState, useContext, useRef } from 'react'
import './AuthForm.css'
import { useDispatch, useSelector } from 'react-redux'
import { AuthContext } from '../../context/AuthContext'
import { useHistory } from 'react-router-dom'

export default function SignUp() {

  const [error, setError] = useState("")
  const history = useHistory()
  const { subscribe } = useContext(AuthContext)
  const dispatch = useDispatch()

  const showModal = useSelector(state => state)

  const closeModal = () => {
    dispatch({
      type: "CLOSEMODAL"
    })
  }

  const toggleSignIn = () => {
    dispatch({
      type: "TOGGLEIN"
    })
  }

  const inputs = useRef([])

  const addInput = (input) => {
    if (input && !inputs.current.includes(input)) {
       inputs.current.push(input)
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()
    // Confirmation password
    if(inputs.current[1].value !== inputs.current[2].value) {
      setError("Les mots de passe ne sont pas identiques.")
      return;
    }
    
    await subscribe(inputs.current[0].value, inputs.current[1].value)
    closeModal()
    history.push("/loggedHome")

    // inputs.current.forEach(elem => {
    //   elem.value = ""
    // })
    // setError("")
  }

  return (
    <div className={showModal.showSignUp ? "global-modal" : "hide-modal"}>
        <div onClick={closeModal} className="overlay"></div>

        <div className="container-modal">
             <form onSubmit={handleSubmit} className="form-auth">
                 <h2>INSCRIPTION</h2>

                 <label htmlFor="email">Votre mail</label>
                 <input ref={addInput} type="email" id="email" required />

                 <label htmlFor="password">Votre mot de passe</label>
                 <input ref={addInput} type="password" id="password" required />

                 <label htmlFor="confirm-pass">Confirmez le mot de passe</label>
                 <input ref={addInput} type="password" id="confirm-pass" required />
                
                 {error}

                <button className="btn-sign">S'inscrire</button>
             </form>

             <button onClick={closeModal} className="btn-close">X</button>
             <p onClick={toggleSignIn} className="button-help-txt">Vous avez déjà un compte ?</p>
        </div>
    </div>
  )
}
