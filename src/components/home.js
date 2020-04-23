import React from 'react';
import '../';

export default class Home extends React.Component{
  constructor(props){
      super(props)
      this.state = {
          background: ''
      }

     async const getShow = () => {
         let theSearch = document.getElementById("searchSpace").value;

         let answer = await axios.get(`https://www.episodate.com/api/search?q=${theSearch}`)

         console.log(answer.data)
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
    <div id="searchSpace">
    <form>
            <input type="text" placeholder="enter the name of a show here"></input>
            <input type="submit" value="submit"></input>

            
        </form>
    </div>
    </div>

  );
    }
}