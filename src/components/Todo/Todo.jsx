import React from 'react'
import {BsTrash } from 'react-icons/bs';

export default function Todo({todo,onUpdate,onDelete}) {
  const {text,status}= todo;
  const handleChange = (e)=>{
    const status = e.target.checked?'completed':'active';
    onUpdate({...todo,status})
  }
  const handleDelete =()=> onDelete(todo)
  return (
    <li>
      <input 
      type="checkbox" 
      id='checkbox' 
      // 체크박스의 상태가 completed이면 체크이다.
      checked={status === 'completed'}
      onChange={handleChange}
      />
      <label htmlFor='checkbox'>{text}</label>
      <button onClick={handleDelete}><BsTrash/></button>
    </li>
  )
}
