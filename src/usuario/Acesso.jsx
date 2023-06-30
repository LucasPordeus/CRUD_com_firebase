import React, {useState} from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../infra/firebase';

export default function Acesso({setUsuario}) {
  const [nomeUsuario, setNomeUsuario] = useState("");
  const [senha, setSenha] = useState("");

  const handleNomeUsuario = (event) => {
    setNomeUsuario(event.target.value);
  }
  const handleSenha = (event) => {
    setSenha(event.target.value);
  }
  const login = () => {
    signInWithEmailAndPassword(auth, nomeUsuario, senha)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setUsuario(nomeUsuario);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        alert("Login Inválido");
      });
  }
  
  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <h3>Acesso:</h3>
      <form onSubmit={e => {e.preventDefault(); login()}}>
        <label htmlFor='login-username'>Usuário:</label><br></br>
        <input type='text' name='login-username' id='login-username' 
          value={nomeUsuario} onChange={handleNomeUsuario} /><br></br>
        <label htmlFor='login-password'>Senha:</label><br></br>
        <input type='password' name='login-password' id='login-password' 
          value={senha} onChange={handleSenha} /><br></br>
        <input type='submit' value='Login' />
      </form>
    </div>
  )
}