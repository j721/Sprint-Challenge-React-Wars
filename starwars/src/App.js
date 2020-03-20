import React, {useState, useEffect} from 'react';
import Card from './components/Card';
import styled from 'styled-components';
import axios from 'axios';
import './App.css';


const Wrapper =styled.div`
display:flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  // const proxy = "https://cors-anywhere.herokuapp.com/";
  // const url = "https://swapi.co/api/people";
  // function getCharacters(){
  //   return(proxy + url) // inside axios call this is a function that adds 2 strings
  // }

  const [StarData, setData] = useState([]);
  useEffect(() => {
      axios.get("https://swapi.co/api/people")
	    .then(response  => {
        const Stardata= response.data.results;
        setData(StarData);
        console.log(Stardata, 'data was returned');
      })
      .catch(error => {
        console.log(error);
      });
  }, [StarData]);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
     <Wrapper>
        {StarData.map((person,index)=>{
           return <Card 
           key={index} name={person.name}
           mass={person.mass}
          hair_color={person.hair_color}
          skin_color ={person.skin_color} 
          birth_year = {person.birth_year}
          gender = {person.gender}
        />
      })}
      </Wrapper>
      
          </div>
          );
        }
        
        export default App;
