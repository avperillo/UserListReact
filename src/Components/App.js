import React, { Component } from 'react';
import NavMenu from './NavMenu';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <div>
        <NavMenu></NavMenu>
        <Main></Main>
      </div>
    );
  }
}

export default App;
