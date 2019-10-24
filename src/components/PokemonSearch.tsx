import * as React from 'react';
import Contacts from './Contacts';
// import { Button } from 'reactstrap';


export interface PokemonSearchProps {
   name: string;
}
 
export interface PokemonSearchState {
    
}
 
class PokemonSearch extends React.Component<PokemonSearchProps, PokemonSearchState> {

    
    state = { count : 0,
        contacts: []}
    
    multiply = () => {
        this.setState({count:(this.state.count*this.state.count)})
    }

    increment = (value:number) => {
        this.setState({
          count: (this.state.count + value)
        });
      };
    
      decrement = () => {
        this.setState({
          count: (this.state.count - 1)
        });
      };

      componentDidMount = () => {
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then((data) => {
          this.setState({ contacts: data })
        }).catch(console.log)
      }

    render() { 
        return ( <div>
            <h1>{this.state.count}</h1>
         
        <button name="1" onClick={this.componentDidMount}>Increment</button>
        <button name="2" onClick={this.decrement}>Decrement</button>
        <button name="3" onClick={this.multiply}>multiply</button>
        <h2>{this.props.name}</h2>
        <Contacts contacts={this.state.contacts} />
        
        </div>  );
    }
}
 
export default PokemonSearch;