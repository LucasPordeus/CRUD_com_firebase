import React, { useState, useEffect} from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import Todo from './Todo';
import { db } from '../infra/firebase';
import {
  collection,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
} from 'firebase/firestore';
import {listarTodo} from '../infra/todos';
import './styles.css'

export default function Todos({ data, setData, usuario }) {

  const [input, setInput] = useState('');

 


  // Create todo
  const createTodo = async (e) => {
    e.preventDefault(e);
    if (input === '') {
      alert('Por favor escreva um Todo válido');
      return;
    }
    const novaData = { texto: input, autor: usuario, completed: false };
    try {
      const docRef = await addDoc(collection(db, "todos"), novaData);
      console.log(docRef.id);
      setData([novaData, ...data]);
    } catch (e) {
      console.error("Erro: ", e);
    }
    setInput('');
  }

  // Update todo in firebase
  const toggleComplete = async (data) => {
    await updateDoc(doc(db, 'todos', data.id), {
      completed: !data.completed,
    });
  };

  // Delete todo
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, 'todos', id));
  };

   const fetchData = async () => {
    if(usuario) {
      const lista = await listarTodo(usuario);
      setData(lista);
    } else {
      setData([]);
    }
  }
  useEffect(() => {fetchData()}, [data])


  return (
    <div className="todo-app">
      <div className="todo-container">
        <h3>Todo App</h3>
        <form onSubmit={createTodo}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type='text'
            placeholder='Add Todo'
          />
          <button>
            <AiOutlinePlus size={30} />
          </button>
        </form>
        <ul>
          {data.map((item, index) => (
            <Todo
              key={index}
              item={item}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
        {data.length < 1 ? null : (
          <p>{`You have ${data.length} todos`}</p>
        )}
      </div>
    </div>
  );
}

