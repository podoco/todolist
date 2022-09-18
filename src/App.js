import React, { Component } from 'react';
import './App.css';


export default class App extends Component {

  getStyle = () => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: "none"
    }
  }

  render() {
    return (
      <div className='container'>
        <div className='todoBlock'>
          <div className='title'>
            <h1>할일목록</h1>
          </div>

          <div style={this.getStyle()}>
            <input type="checkbox" defaultChecked={false} />
            공부하기
            <button className='btnStyle'>x</button>
          </div>
        </div>
      </div>
    )
  }
}