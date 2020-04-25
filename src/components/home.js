import React, { useReducer } from 'react';
import '../';
import axios from "axios";



export default class Home extends React.Component{
  constructor(props){
      super(props)
      this.state = {
          results: [],
          userQuery: ""
      }
     } 

     
  
    
     typing = event => {
         this.setState({
            userQuery: event.target.value
         })
     }

     getShow = event => {
         alert(`${this.state.userQuery}`)
        axios.get(`https://www.episodate.com/api/search?q=fresh prince`)
        .then( res =>{
            let answer = res.data;
            console.log(answer.tv_shows[0].name)

            this.setState({
                results: answer.tv_shows[0].name
        })
        event.preventDefault()
    })
     }

  
  render(){
  

    return (
<div id="outer">
    <div id="main-nav">
        <div id="logo">
         <img src="../images/quickshow.jpg" alt="Quick show"/>
        </div> 
        <div id="nav">
             <div id="navHome">Home</div> <div id="navCategories">Categories</div> <div id="navAbout">About</div>
        </div>
        <div id="searchSpace">
           <form onSubmit={this.getShow}>
                <input id="submit" type="submit" value="&#x1F50D;"></input>  
                <input id="search" type="text" value={this.state.userQuery} onChange={this.typing} placeholder="enter the name of a show here"></input>
          </form>
       </div>
    </div>
    <div><h2 id="hotSpot">{this.state.results}</h2></div>
</div>

  );
    }
}
