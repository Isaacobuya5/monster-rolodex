import React from 'react';
import { SearchBox } from './components/search-box/search-box.component';
import { CardList } from './components/card-list/card-list.component';
import logo from './logo.svg';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchField:''
    }
    //this.handleChange = this.handleChange.bind(this);
  }

  //lifeCycle Mothod
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => this.setState({
        monsters: users
    }))
  }

  //defining our own methods

  // handleChange(e) {
  //   this.setState({ searchField: e.target.value});
  // }

  //with arrow functions -> there is no need to bind this, because they automaticaly get lexical scoping
  //means they automatically bind "this" to the context/scope in which they are defined
  handleChange = e => this.setState({ searchField: e.target.value});
  render() {
    //Use destructuring to pull our state object properties into constants - Destructuring
    const { monsters, searchField} = this.state;
    //function to filter monsters based on searchText
    const filteredMonsters = monsters.filter(monster => 
      // NOTE -> when no curly baraces, don't use RETURN KEYWORD
        monster.name.toLowerCase().includes(searchField.toLowerCase())
      );
    
  return (
    <div className="App">
        
        <h1>Monsters Rolodex</h1>
        <SearchBox 
            placeholder="Search monsters"
            handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}>
        </CardList>
    </div>
  );
}
}

export default App;
