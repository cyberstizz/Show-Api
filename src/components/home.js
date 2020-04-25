import React from 'react';
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
         event.preventDefault()

        axios.get("https://www.episodate.com/api/search?q=" + this.state.userQuery)
        .then( res =>{
            let answer = res.data;
            this.setState({
                results: answer.tv_shows[0].name
        })
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
    <div><h2 id="hotSpotTwo">{this.state.results}</h2></div>

</div>

  );
    }
}
