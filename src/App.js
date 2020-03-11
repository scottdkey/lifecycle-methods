import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WindowInfo from './WindowInfo';
import Animation from './Animation'
import MouseInfo from './MouseInfo';

class App extends Component {
  constructor(props){
    super(props)
    }
    componentDidMount(){

    }
  
  render() {
  return (
    <div className="App" style={{display: 'flex', justifyContent: 'center', flexDirection:'column', alignItems: 'center'}}>
      <WindowInfo/>
      <Animation height={600} width={600} color={'lightgrey'}/>
      {/* add another listener mouse position, ball position etc */}
    </div>
  );
  }
}

export default App;
