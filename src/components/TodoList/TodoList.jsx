import React, { useState } from 'react'
import AddTodo from '../AddTodo/AddTodo'


export default function TodoList() {
  const[todos,setTodos] = useState([
    {
      id:1,
      text:'리액트공부',
      status:'active'
    },
    {
      id:2,
      text:'프론트엔드의 꽃 ',
      status:'active'
    }
  ])
  const handleAdd = (todo) => setTodos([...todos,todo])
  return (
    <section>
      <ul>
        {
          todos.map(item => <li key={item.id}>{item.text}</li>)
        }
      </ul>
      <AddTodo onAdd={handleAdd}/>
    </section>
    
  )
}
