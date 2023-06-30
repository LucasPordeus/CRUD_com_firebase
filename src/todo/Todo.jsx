import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';

export default function Todo({item, toggleComplete, deleteTodo}) {
  return(
    <li>
      <div>
        <input onChange={() => toggleComplete(item)} type='checkbox' checked={item.completed ? 'checked' : ''} />
        <p onClick={() => toggleComplete(item)}>
          {item.texto}
        </p>
      </div>
      <button onClick={() => deleteTodo(item.id)}>{<FaRegTrashAlt />}</button>
    </li>
  )
}