import React, { useState } from 'react';
import './App.css';
import Lists from './components/Lists';
import Form from './components/Form';

const initialTodoData = localStorage.getItem("todoData") ? JSON.parse(localStorage.getItem("todoData")) : [];

export default function App() {

  const [todoData, setTodoData] = useState(initialTodoData);
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
    localStorage.setItem('todoData', JSON.stringify([...todoData, newTodo]));
    setValue("");
  }
  //Delete-all 버튼
  const handleRemoveClick = () => {
    setTodoData([]);
    localStorage.setItem('todoData', JSON.stringify([]));
  }

  return (
    <div className='flex items-center justify-center w-screen h-screen bg-blue-100'>
      <div className='w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg'>
        <div className='flex justify-between mb-3' >
          <h1>할일목록</h1>
          <button onClick={handleRemoveClick}>Delete All</button>
        </div>
        <Lists todoData={todoData} setTodoData={setTodoData} />
        <Form setValue={setValue} value={value} handleSubmit={handleSubmit} />
      </div>
    </div>
  )
}
