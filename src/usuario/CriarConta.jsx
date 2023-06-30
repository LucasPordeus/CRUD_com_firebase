import React, {useState} from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../infra/firebase";

export default function CriarConta({setUsuario}) {

  const [nomeUsuario, setNomeUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [confirma, setConfirma] = useState("");
  
  const handleNomeUsuario = event => {
    setNomeUsuario(event.target.value);
  }
  const handleSenha = event => {
    setSenha(event.target.value);
  }
  const handleConfirma = event => {
    setConfirma(event.target.value);
  }
  //-----------------------------------------------------------
  async function criarConta() {
    if(senha === confirma) {
      await createUserWithEmailAndPassword(auth, nomeUsuario, senha)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          setUsuario(nomeUsuario);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    } else {
      alert("As senhas não conferem");
    }
  }
  //-----------------------------------------------------------
  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <h3>Criar Conta</h3>
      <form onSubmit={e => {e.preventDefault(); criarConta()}}>
        <label htmlFor='register-username'>Usuário:</label><br></br>
        <input type='text' name='register-username' id='register-username' 
          value={nomeUsuario} onChange={handleNomeUsuario} />
        <br></br>
        <label htmlFor='register-password'>Senha:</label><br></br>
        <input type='text' name='register-password' id='register-password'
          value={senha} onChange={handleSenha} /><br></br>
        <label htmlFor='register-password-repeat'>Confirma:</label><br></br>
        <input type='text' name='register-password-repeat' id='register-password-repeat'
          value={confirma} onChange={handleConfirma} /><br></br>
        <input type='submit' value='Criar Conta' />
      </form>
    </div>
  )
}