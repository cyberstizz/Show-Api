import React from 'react';
import '../';

export default class Home extends React.Component{
  constructor(props){
      super(props)
      this.state = {
          background: ''
      }
  }
  render(){
    return (
    <div id="main-nav">
<div id="logo"></div> <div id="nav"></div>
    </div>

  );
    }
}