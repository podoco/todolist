import React from 'react'

export default function List({ todoData, setTodoData }) {

  const btnStyle = {
    color: '#fff',
    border: 'none',
    padding: '5px, 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
  };
  const listStyle = (completed) => {
    return {
      padding: "5px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through" : "none"
    }
  }

  const handleCompleChange = (id) => {

    let newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });
    setTodoData(newTodoData);
  }


  //삭제하기
  const handleClick = (id) => {
    let newTodoData = todoData.filter(data => data.id !== id)
    setTodoData(newTodoData);
  }



  return (
    <div>
      {todoData.map((data) => (
        <div style={listStyle(data.completed)} key={data.id}>
          <input
            onChange={() => handleCompleChange(data.id)}
            type="checkbox"
            defaultChecked={false} />
          {data.title}
          <button style={btnStyle} onClick={() => handleClick(data.id)}>x</button>
        </div>
      ))}
    </div>
  );
}
