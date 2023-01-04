import './App.css';
import { useState } from 'react';
import Header from './components/header/Header';
import TodoList from './components/TodoList/TodoList';
import Calendar from './components/Calender/Calendar';

const  lists =['all','active','completed']
function App() {
  const[list,setlist] =useState(lists[0])

  return (
   <>
   <Calendar/>
    {/* 처음 보여주는 list는 all전부다(lists) 이고 현재선택된정보 (list)  리스트가 변경될시 호출되는 setlist 정보*/}
    <Header lists={lists} list={list} onChangelist={setlist}/>
    <TodoList list={list}/>
   </>
  );
}

export default App;
