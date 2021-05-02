import React from 'react';
import axios from "axios";
import '../App.css';
import '../breakingbad.jpg';

const startingBackground = '../breakingbad.jpg'


export default class Home extends React.Component{
  constructor(props){
      super(props)
      this.state = {
          results: [],
          resultsTwo: [],
          resultsThree: [],
          resultsFour: [],
          userQuery: "",
          backgroundImageCall: `url(${startingBackground})`
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
                backgroundImageCall: `url(${answer.tv_shows[0].image_thumbnail_path})`
                
        })
        let imagePlace = document.getElementById('main-nav');
        imagePlace.style.backgroundImage = this.state.backgroundImageCall;
   
    }).catch(error => {
        return error
    })
     }

  
  render(){

   setTimeout( () =>{
    let thePopup = document.getElementById('popupDiv');
    thePopup.style.visibility = 'hidden' ? thePopup.style.visibility = 'visible' : thePopup.style.visibility = 'hidden';
   }, 2000) ;
  

    return (
<div id="outer">
    <div id="popupDiv">Welcome to Quickshow! A quick way to learn information about a tv show or series. <br/>
                        Type the name of a show into the search bar and the displays at the bottom will <br/>
                        present the network the show belonged to, its first air date, and if it is still running. <br/>
    
    <button onClick={() => {
    let thePopup = document.getElementById('popupDiv');
    thePopup.style.visibility = 'visible' ? thePopup.style.visibility = 'hidden' : thePopup.style.visibility = 'hidden';
    }}>Get Started</button>
    </div>
    <div id="main-nav">
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
    <div><h1 id="hotSpot">&#8284;{this.state.results}&#8284;</h1></div>
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
