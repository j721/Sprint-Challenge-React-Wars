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

  const [data, setData] = useState([]);
  useEffect(() => {
      axios.get('https://swapi.co/api/people/')
	    .then(response  => {
        setData(response.data.results);
        console.log(data, 'data was returned');
      })
      .catch(error => {
        console.log(error);
      });
  }, [data]);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Wrapper>
        {data.map(character=>{
          return(
            <Card>
              key={character.name}
              name={character.name}
              mass={character.mass}
              hair_color={character.hair_color}
              skin_color ={character.skin_color} 
              birth_year = {character.birth_year}
              gender = {character.gender}
            </Card>
          );
        })}
      </Wrapper>
    </div>
  );
}

export default App;
