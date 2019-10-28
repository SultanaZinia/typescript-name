import * as React from 'react';
import PokemonSearch from './components/PokemonSearch';
import './components/pokemon.css';



class App extends React.Component {

  state = {
    //datarecorrd
    contacts: [] ,
    //loading flag
    loading: true,
    error: false
  }

  componentDidMount = () => {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((data) => {
      this.setState({ contacts: data,
        loading: false})
    }).catch(
      error => this.setState({ 
      loading: false, 
      error: true 
    }));
  }

  public render() {
    //loading data from state into local const variable
    const { contacts, loading, error } = this.state;
    return (
      <div className="App">
        //if api data already loaded and no error then render table
        {!loading && !error && <PokemonSearch contacts={contacts}/>
        }
        
      </div>
    );
  }
}

export default App;
