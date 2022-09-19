import React, { useState } from 'react';
import './App.css';
import List from './components/List';
import Form from './components/Form';


export default function App() {

  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    //새로운 할 일 데이터
    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false
    };
    //앞에 있던 할 일에 새로운 할 일 더하기
    setTodoData((prev) => [...prev, newTodo]);
    setValue("");

  }
  return (
    <div className='container'>
      <div className='todoBlock'>
        <div className='title'>
          <h1>할일목록</h1>
        </div>
        <h1 className='text-3xl font-bold underline'>hello world!</h1>
        <List todoData={todoData} setTodoData={setTodoData} />
        <Form setValue={setValue} value={value} handleSubmit={handleSubmit} />
      </div>
    </div>
  )
}
