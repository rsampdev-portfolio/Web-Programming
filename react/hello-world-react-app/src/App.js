import React from 'react';
import './App.css';

import NameHeader from './components/name-header/name-header.js'; 
import UnorderedList from './components/unordered-list/unordered-list.js'; 

class App extends React.Component {
  constructor(props){
    super(props); 
    this.state = {
      name: "Rodney Sheron Sampson II",
      favoriteMovies: ["Star Wars", "Transformers", "Avengers", "X-Men"]
    }; 
  }
  
  render (){
    return (
      <>
        <NameHeader name={this.state.name}/>
        <p>Favorite Movies:</p>
        <UnorderedList listItems={this.state.favoriteMovies}/>
      </>
    )
  }
}

export default App;