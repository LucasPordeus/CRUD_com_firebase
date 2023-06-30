import React, {useState} from 'react';
import Logout from './Logout';
import Acesso from './Acesso';
import CriarConta from './CriarConta';

export default function BarraUsuario({usuario, setUsuario}) {

  if(usuario) {
    return <Logout usuario={usuario} setUsuario={setUsuario} />
  } else {
    return (
      <React.Fragment>
        <Acesso setUsuario={setUsuario} /><br></br>
        <CriarConta setUsuario={setUsuario} />
      </React.Fragment>
    ) 
  }
}