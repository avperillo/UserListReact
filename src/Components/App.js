import React, { Component } from 'react';
import logo from '../Assets/logo.svg';
import './App.css';
import UserList from './UserList';
import UserForm from './UserForm';

class App extends Component {
  constructor(){
    super();
    this.state = {
      users: [
        {id: 1, name: "Alex", email: "avperillo@hotmail.com"}
      ]
    }
  }

  handleOnAddUser (event) {
    event.preventDefault(); // evitar el envío del formulario
    let user = {
      name: event.target.name.value,
      email: event.target.email.value
    };
    this.setState({
      // no push, sino concat que crea nuevo array 
      // para mantener la inmutabilidad del estado en el punto anterior
      users: this.state.users.concat([user]) 
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <div>
          <UserList users={this.state.users}></UserList>
          <UserForm onAddUser={this.handleOnAddUser.bind(this)} />
        </div>
      </div>
    );
  }
}

export default App;
