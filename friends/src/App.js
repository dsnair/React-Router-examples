import React, { Component } from 'react'
import axios from 'axios'
import './App.css'

class App extends Component {
  state = {
    friends: []
  }

  // componentDidMount() {
  //   axios
  //     .get('http://localhost:5000/friends')
  //     .then(response => this.setState({ friends: response.data }))
  //     .catch(error => console.error(error))
  // }

  async componentDidMount() {
    try {
      const response = await axios.get('http://localhost:5000/friends')
      this.setState({ friends: response.data })
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    return (
      <div className="app">
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>E-mail</th>
              <th>Age</th>
            </tr>
          </tbody>

          <tbody>
            {this.state.friends.map(friend => (
              <tr key={friend.id}>
                <td>{friend.name}</td>
                <td>{friend.email}</td>
                <td>{friend.age}</td>
                <td className="deleteCell">
                  <i className="fas fa-times" />
                </td>
              </tr>
            ))}
            
            <tr>
              <td>
                <input type="text" placeholder="Name" form="form" />
              </td>
              <td>
                <input type="email" placeholder="E-mail" form="form" />
              </td>
              <td>
                <input type="number" placeholder="Age" form="form" />
              </td>
              <td className="addCell">
                <i className="fas fa-plus" />
              </td>
            </tr>
          </tbody>
        </table>

        <form method="POST" id="form" />
      </div>
    )
  }
}

export default App
