import React from 'react';
import '../';
import axios from "axios";



export default class Home extends React.Component{
  constructor(props){
      super(props)
      this.state = {
          results: []
      }
     } 

     buttonClick(){
        let theSearch = document.getElementById("search").value;

        axios.get(`https://www.episodate.com/api/search?q=${theSearch}`)
              .then( res =>{
                  let answer = res.data;
                  console.log(answer.tv_shows[0].name)
  
                  this.setState({
                      results: answer.tv_shows[0].name
              })
          })
    } 
     
     componentDidUpdate(){


                this.setState({
                    results: this.state.results
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
             <div>link1</div><button onClick={this.firecracker}>dropdown</button> <div>link3</div>
        </div>
        <div id="searchSpace">
           <form>
                <input id="submit" type="submit" value="&#x1F50D;"></input>  
                <input id="search" type="text" placeholder="enter the name of a show here"></input>
          </form>
       </div>
    </div>
    <div><h2 id="hotSpot">{this.state.results}</h2></div>
</div>

  );
    }
}
