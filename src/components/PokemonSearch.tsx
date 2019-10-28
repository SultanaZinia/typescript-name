import * as React from 'react';
import './pokemon.css';
// import Contacts from './Contacts';
// import { Button } from 'reactstrap';


export interface PokemonSearchProps {
    contacts: Object,
}
 
export interface PokemonSearchState {
    
}
 
class PokemonSearch extends React.Component<PokemonSearchProps, PokemonSearchState> {

    
    state = { count : 0,
        students: [
            { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com' },
            { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
            { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
            { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' }
         ]
    }
    
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

      


      renderTableHeader =() =>{
        // this.componentDidMount();
          console.log(this.props.contacts);
        let header = Object.keys(this.state.students[0])
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
     }
     
     renderTableData = () =>{
        return this.state.students.map((student, index) => {
           const { id, name, age, email } = student //destructuring
           return (
              <tr key={id}>
                 <td>{id}</td>
                 <td>{name}</td>
                 <td>{age}</td>
                 <td>{email}</td>
              </tr>
           )
        })
     }

     renderContactTableHeader = ()=>{
        let header = Object.keys(this.props.contacts[0])
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
     }

     createTable = () => {
        let contacts = this.props.contacts;
        let table = [];
        let len  = Object(contacts).length;
        // Outer loop to create parent
        for (let i = 0; i < len; i++) {
          let children = []
          let child = contacts[i];
          //Inner loop to create children
          let keys = Object.keys(child);
          for (let key of keys) {
              let childData = child[key];
            if (typeof (childData) == 'object'){
                childData = '';
            }
            children.push(<td key={key}>{childData}</td>)
          }
          //Create the parent and add the children
          table.push(<tr key={i}>{children}</tr>)
        }
        return table
      }

    render() { 
        return ( <div>
            <h1>{this.state.count}</h1>
            <div><select name="weight"><option value="1">Increased</option><option value="2">Decreased</option></select></div>
         
        <button name="1" onClick={this.componentDidMount}>Increment</button>
        <button name="2" onClick={this.decrement}>Decrement</button>
        <button name="3" onClick={this.multiply}>multiply</button>
        <h2>Table part</h2>
        <table id = "contacts">
        <tbody>
                  <tr>{this.renderContactTableHeader()}</tr>
                  {this.createTable()}
               </tbody>
        </table>
        
        </div>  );
    }
}
 
export default PokemonSearch;