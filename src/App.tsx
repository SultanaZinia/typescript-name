import * as React from 'react';
import PokemonSearch from './components/PokemonSearch';



class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <PokemonSearch name="Annu"/>

      </div>
    );
  }
}

export default App;
