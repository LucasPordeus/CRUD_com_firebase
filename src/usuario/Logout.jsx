import React from 'react';
import { signOut } from "firebase/auth";
import { auth } from "../infra/firebase";

export default function Lougout({usuario, setUsuario}) {
  return (
    <form onSubmit={e => {
      e.preventDefault(); 
      signOut(auth).then(() => {
        setUsuario("");
      })
    }}>
      Conta de Acesso: <b>{usuario}</b>
      <input type='submit' value='Logout' />
    </form>
  )
}