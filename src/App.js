import React, { Component } from 'react';
import './App.css';
import PeopleCard from './PeopleCard.js';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      arrayOfPeople: []
    }
  };

  componentDidMount(){
    fetch("https://randomuser.me/api?results=25")
    .then(res => res.json())
    .then(data => {
      console.log("data", data)
      console.log("data res", data.results[0])
      this.setState({
        arrayOfPeople: data.results
      })
    })
  };


  
  
  
  
  
  
  render() {
    return (
      <div className="App">
        <ol>{this.state.arrayOfPeople.map((people, index) => {
          console.log("person", people)
          return (
            <PeopleCard key={index}
            gender={people["gender"]}
            name={people.name.first}
            city={people.location.city}
            state={people.location.state}
            country={people.location.country}
            email={people.email}
            // login={people.login}
            // dob={people.login}
            // registered={people.registered}
            phone={people.phone}
            cell={people.cell}
            // id={people.id}
            picture={people.picture.large}
            ></PeopleCard>
            )
          })}</ol>
          

      </div>
    )
  }
}
export default App



/* Functional components
export default function App() {
  /// const state or [isLoggedIn, setIsLoggedIn] = false;///

  console.log(isLoggedIn)

const [data, setData] = useState([]);


  handleClick = () => {
  console.log("clicked");
  };
  to update call setIsLoggedIn
  setIsUserLoggedIn(!isUserLoggedIn)

  return (
    <div className ="App">
    <h1>Hello code Sandbox</h1>
    <h2>Start editing to see some magic happen!</h2>
    <button onClick={}>Click Me </button>
    </div>
  );
}

Life cycle methods
import react, {useState , useEffect } from "react";
same thing as a component did mount and can use multiple

useEffect(()=>{}, [keeps track of what state changes])

useEffect((callback function)=>{
 fetch("https://randomuser.me/api?results=25")
    .then(res => res.json())
    .then(data => {
      console.log("data", data)
      console.log("data res", data.results[0])
}, [array])

*/




// APP should do this!!!
// Spec 1: minimum 25 users
// Spec 2: displays the user's name and thumbnail picture
// Spec 3: When the "show details" button is clicked the user's 
// details are revealed and button text turns to "hide details"
// Spec 4 When "hide details" is clicked the user's details disappear.