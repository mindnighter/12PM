import React from 'react';
import Block from './Block';
import style from './App.module.css';

class App extends React.Component{
  render() {
    return (
      <div className ={style.wraper}>
        <Block title = "Good things" color = "green" />
        <Block title = "Bad things" color = "red" />
        <Block title = "Action items" color = "blue" />
      </div>
    );
  }
}

export default App;
