import React from 'react';
import '../';
import axios from "axios";



export default class Home extends React.Component{
  constructor(props){
      super(props)
      this.state = {
          results: [],
          resultsTwo: [],
          resultsThree: [],
          resultsFour: [],
          userQuery: "",
          backgroundImage: `url("./images/breakingbad.jpg")`
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
                results: answer.tv_shows[0].name,
                resultsTwo: answer.tv_shows[0].network,
                resultsThree: answer.tv_shows[0].start_date,
                resultsFour: answer.tv_shows[0].status,
                backgroundImage: `url(${answer.tv_shows[0].image_thumbnail_path})`
        })
    })
     }
  
  render(){
  

    return (
<div id="outer">
    <div id="main-nav" style={{backgroundImage: this.state.backgroundImage}}>
        <div id="logo">
        </div> 
        <div id="nav">
             <div id="navHome"></div> <div id="navCategories"></div> <div id="navAbout"></div>
        </div>
        <div id="searchSpace">
           <form onSubmit={this.getShow}>
                <input id="submit" type="submit" value="&#x1F50D;"></input>  
                <input id="search" type="text" value={this.state.userQuery} onChange={this.typing} placeholder="enter the name of a show here"></input>
          </form>
       </div>
    </div>
    <div><h2 id="hotSpot">{this.state.results}</h2></div>
    <div id="bottomRow">
        <div id="bottomOne">
            <div id="network"></div>
            <h2 id="hotSpotTwo">{this.state.resultsTwo}</h2>
        </div>
        <div id="bottomTwo">
            <div id="firstAired"></div>
            <h2 id="hotSpotThree">{this.state.resultsThree}</h2>
        </div>
        <div id="bottomThree">
            <div id="stillRunning"></div>
            <h2 id="hotSpotFour">{this.state.resultsFour}</h2>
        </div>
    </div>
</div>

  );
    }
}
