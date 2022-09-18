import React, { Component } from 'react';
import './App.css';


export default class App extends Component {

  state = {
    todoData: [
      {
        id: "1",
        title: "공부하기",
        completed: true
      },
      {
        id: "2",
        title: "청소하기",
        completed: false
      }
    ]
  }

  getStyle = () => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
    }
  }


  handleClick = (id) => {
    let newTodoData = this.state.todoData.filter(data => data.id !== id)
    this.setState({ todoData: newTodoData });
  }


  render() {
    return (
      <div className='container'>
        <div className='todoBlock'>
          <div className='title'>
            <h1>할일목록</h1>
          </div>

          {this.state.todoData.map((data) => (
            <div style={this.getStyle()} key={data.id}>
              <input type="checkbox" defaultChecked={false} />
              {data.title}
              <button className='btnStyle' onClick={() => this.handleClick(data.id)}>x</button>
            </div>
          ))}


        </div>
      </div>
    )
  }
}