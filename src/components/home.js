// React and axios or the only imports required for this page
// so they are imported here
import React from 'react';
import axios from "axios";
import '../App.css';
import '../breakingbad.jpg';
// the application starts with the breaking bad picture as the background
// so the first thing that I did was put the path to that image in a variable
const startingBackground = '../breakingbad.jpg';


export default class Home extends React.Component{
  constructor(props){
      super(props)
    //   the this.state property for this component is generated as an object.
    //   each property in this object has the value of an array for each
    //   slot that will display results about a show as well and strings
    //   to represent what the user types in, and the url
    //   to the background image
      this.state = {
          results: [],
          resultsTwo: [],
          resultsThree: [],
          resultsFour: [],
          userQuery: "",
          backgroundImageCall: `url(${startingBackground})`
      }
     } 

     

    // this is a function to change the userquery property on this.state
    // every time that user types into the search bar
     typing = event => {
        //this.setstate is used to achieve this
         this.setState({
            userQuery: event.target.value
         })
     }


            // this is a function to make the api call to the episodate api and display
            // the results by changing this.state properties and displaying the values
            // of those properties in the dom
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

//this lifecycle method used withing react class components was 
//created to make a pop up appear when you first enter the websit
//this popup will appear on the page until you click and acknowledge it
//then it will be set to disappear
     componentDidMount(){
        setTimeout( () =>{
            let thePopup = document.getElementById('popupDiv');
            thePopup.style.visibility = 'hidden' ? thePopup.style.visibility = 'visible' : thePopup.style.visibility = 'hidden';
           }, 2000) ;
     }

  
  render(){


    return (
<div id="outer">
    {/* this is the popup that will occur when a user initially enters a page */}
    {/* its is set to popupDiv and that will be made invisible once a user clicks on it */}
    <div id="popupDiv">Welcome to Quickshow! A quick way to learn information about a tv show or series. <br/>
                        Type the name of a show into the search bar and the displays at the bottom will <br/>
                        present the network the show belonged to, its first air date, and if it is still running. <br/>
    
    <button onClick={() => {
    let thePopup = document.getElementById('popupDiv');
    thePopup.style.visibility = 'visible' ? thePopup.style.visibility = 'hidden' : thePopup.style.visibility = 'hidden';
    }}>Get Started</button>
    </div>
    {/* this section ... main div is the part that you see the breaking bad logo on. it holds the search bar */}
    <div id="main-nav">
        <div id="logo">
        </div> 
        <div id="nav">
             <div id="navHome"></div> <div id="navCategories"></div> <div id="navAbout"></div>
        </div>

        {/* this is the searchbar in the middle of the screen */}
        <div id="searchSpace">
           <form onSubmit={this.getShow}>
                <input id="submit" type="submit" value="&#x1F50D;"></input>  
                <input id="search" type="text" value={this.state.userQuery} onChange={this.typing} placeholder="enter the name of a show here"></input>
          </form>
       </div>
    </div>
    {/* this is the section where the results appear after you have entered a search query */}
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
