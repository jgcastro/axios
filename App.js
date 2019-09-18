import React from 'react';
import axios from 'axios';
import UserForm from './components/UserForm';

import './App.css';


// https://api.github.com/users/john

class App extends React.Component {

  /* constructor(props) {
    super(props);
    this.state = {
      repos: null,
    }
  } */

  state = {
    repos: '',
  }

  

   getUser (e)  {
    e.preventDefault();
    const user = e.target.elements.username.value;
    if (user) {
      axios.get(`https://api.github.com/users/${user}`).then((res) => {
        const repos = res.data.public_repos;
        this.setState({ repos });
      })
    } else return;
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">HTTP Calls in React</h1>
        </header>
        <UserForm getUser={this.getUser} />
        { this.state.repos ? <p>Number of repos: { this.state.repos}</p> : <p>Please enter a username</p>}
      </div>
    );
  }
}

export default App;
