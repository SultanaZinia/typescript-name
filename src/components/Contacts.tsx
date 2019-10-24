import * as React from 'react';

export interface strMap {
    id: number,
    name: string,
    username: string,
    email:string
  }

export interface ContactsProps {
    contacts: strMap[]
 }


 class Contacts extends React.Component<ContactsProps> {
    
    render() { 
        return ( <div>
            {this.props.contacts.map((contact) => (
            <div className="card">
            <div className="card-body">
              <h5 className="card-title">{contact.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{contact.email}</h6>
              <p className="card-text">Stay Hungry, Stay Foolish</p>
            </div>
          </div>
          ))}
        </div>  );
    }
 }

 export default Contacts;