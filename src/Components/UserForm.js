import React, {Component} from 'react'

class UserForm extends Component{
    render (){
        return(
            <form onSubmit={this.props.onAddUser}>
                <input type="text" placeholder="name" name="name"></input>
                <input type="email" placeholder="email" name="email"></input>
                <input type="submit" value="Guardar"></input>
            </form>
        );
    }
}

export default UserForm;