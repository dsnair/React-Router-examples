import React, { Component } from 'react'
import axios from 'axios'
import './App.css'

class App extends Component {
  state = {
    friends: []
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => this.setState({ friends: response.data }))
      .catch(error => console.error(error))
  }

  render() {
    return (
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>E-mail</th>
            <th>Age</th>
          </tr>
        </tbody>
        {this.state.friends.map(friend => (
          <tbody key={friend.id}>
            <tr>
              <th>{friend.name}</th>
              <th>{friend.email}</th>
              <th>{friend.age}</th>
            </tr>
          </tbody>
        ))}
      </table>
    )
  }
}

export default App
