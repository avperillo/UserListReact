import React, { Component } from 'react';
import User from './User';
import UserForm from './UserForm';

class UserList extends Component {
    constructor() {
        super();
        this.state = {
            users: [
                { id: 1, name: "Alex", email: "avperillo@hotmail.com" }
            ]
        }
    }

    handleOnAddUser(event) {
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
            <div>
                <ul>
                    {this.state.users.map(u => {
                        return (
                            <User
                                Key={u.id}
                                name={u.name}
                                email={u.email}
                            />
                        );
                    })}
                </ul>
                <div>
                    <UserForm onAddUser={this.handleOnAddUser.bind(this)} />
                </div>
            </div>
        );
    }
}

export default UserList