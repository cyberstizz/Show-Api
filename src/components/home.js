import React from 'react';
import '../';
import axios from "axios";

let theSearch = document.getElementById("search");

let field = document.getElementById("hotSpot");


export default class Home extends React.Component{
  constructor(props){
      super(props)
      this.state = {
          results: []
      }
     } 

     firecracker(){
         console.log('firecracker')
     }

     componentDidMount(){
        
      axios.get("https://www.episodate.com/api/search?q=fresh prince")
            .then( res =>{
                let answer = res.data;
                console.log(answer.tv_shows[0].name)

                this.setState({
                    results: answer.tv_shows[0].name
            })
        })
  }
    
     

  
  render(){
  

    return (
<div>
    <div id="main-nav">
        <div id="logo">
            <em> QuickShow</em> 
        </div> 
        <div id="nav">
             <div>link1</div><button onClick={this.getShow}>dropdown</button> <div>link3</div>
        </div>
        <div id="searchSpace">
           <form>
                <input id="search" type="text" placeholder="enter the name of a show here"></input>
                <input type="submit" value="submit"></input>     
          </form>
       </div>
    </div>
    <div><h2 id="hotSpot">{this.state.results}</h2></div>
</div>

  );
    }
}
