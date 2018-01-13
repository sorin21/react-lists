import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: 'das4', name: 'Max', age: 28},
      {id: 'dsf1', name: 'Sorin', age: 30},
      {id: 'ghfhg5', name: 'Cristina', age: 19}
    ],
    showPersons: false
  }


  // target is the input where we type  
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((personInput) => {
      return personInput.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    // update the name
    person.name = event.target.value;

    // copy again state persons in a new array
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    // update the state persons
    this.setState({persons: persons})
  }

  deletePersonHandler = (personIndex) => {
    const personsArray = [...this.state.persons];
    personsArray.splice(personIndex, 1);
    // update the state with the new array
    this.setState({persons:personsArray})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let personsList = null;

    if(this.state.showPersons) {
      personsList = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              key={person.id}
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age} 
              changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
        </div> 
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm Sorin a front end developer</h1>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Switch Name
        </button>
        {personsList}
      </div>
    );
  }
}

export default App;
