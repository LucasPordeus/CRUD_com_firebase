import React, {useState, useEffect } from 'react';
import Todos from './todo/Todos';
import BarraUsuario from './usuario/BarraUsuario';
import {listarTodo} from './infra/todos';

export default function App() {  
  const [usuario, setUsuario] = useState("");
  const [data, setData] = useState([]);
  //---------------------------------------------------------------------------------------
  const fetchData = async () => {
    if(usuario) {
      const lista = await listarTodo(usuario);
      setData(lista);
    } else {
      setData([]);
    }
  }
  useEffect(() => {fetchData()}, [usuario])
  //---------------------------------------------------------------------------------------
  return (
    <div style={{padding: 8}}>
      <BarraUsuario usuario={usuario} setUsuario={setUsuario} />
      <br></br>
      {usuario && 
      <Todos
        usuario={usuario} 
        data={data}
        setData={setData}
        />}
     
    </div>
  )
}
