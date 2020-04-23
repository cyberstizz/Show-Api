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
<div id="logo">
       <em> QuickShow</em> 
    </div> 
    <div id="nav">
        <div>link1</div><button>dropdown</button> <div>link3</div>
    </div>
    </div>

  );
    }
}