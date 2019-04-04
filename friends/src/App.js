import React, { Component } from 'react'
import axios from 'axios'
import './App.css'

class App extends Component {
  state = {
    friends: [],
    name: '',
    email: '',
    age: ''
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

  deleteFriend = async id => {
    try {
      const response = await axios.delete(`http://localhost:5000/friends/${id}`)
      this.setState({ friends: response.data })
    } catch (error) {
      console.error(error)
    }
  }

  onAdd = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  addFriend = async () => {
    const newFriend = {
      id: this.state.friends.length + 1,
      name: this.state.name,
      email: this.state.email,
      age: this.state.age
    }
    try {
      const response = await axios.post(
        'http://localhost:5000/friends',
        newFriend
      )
      this.setState({
        friends: response.data,
        name: '',
        email: '',
        age: ''
      })
    } catch (error) {
      console.error(error)
    }
  }

  onUpdate = index => e => {
    const newFriend = [...this.state.friends]
    newFriend.splice(index, 1, {
      ...newFriend[index],
      [e.target.name]: e.target.value
    })
    this.setState({
      friends: newFriend
    })
  }

  updateFriend = async (id, index) => {
    try {
      await axios.put(
        `http://localhost:5000/friends/${id}`,
        this.state.friends[index]
      )
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
            {this.state.friends.map((friend, index) => (
              <tr key={friend.id}>
                <td>
                  <input
                    onChange={this.onUpdate(index)}
                    value={friend.name}
                    type="text"
                    placeholder="Name"
                    name="name"
                  />
                </td>
                <td>
                  <input
                    onChange={this.onUpdate(index)}
                    value={friend.email}
                    type="email"
                    placeholder="E-mail"
                    name="email"
                  />
                </td>
                <td>
                  <input
                    onChange={this.onUpdate(index)}
                    value={friend.age}
                    type="number"
                    placeholder="Age"
                    name="age"
                  />
                </td>
                <td className="editDeleteCell">
                  <i
                    className="fas fa-pen"
                    onClick={() => this.updateFriend(friend.id, index)}
                  />
                  <i
                    className="fas fa-times"
                    onClick={() => this.deleteFriend(friend.id)}
                  />
                </td>
              </tr>
            ))}

            <tr>
              <td>
                <input
                  onChange={this.onAdd}
                  value={this.state.name}
                  type="text"
                  placeholder="Name"
                  name="name"
                />
              </td>
              <td>
                <input
                  onChange={this.onAdd}
                  value={this.state.email}
                  type="email"
                  placeholder="E-mail"
                  name="email"
                />
              </td>
              <td>
                <input
                  onChange={this.onAdd}
                  value={this.state.age}
                  type="number"
                  placeholder="Age"
                  name="age"
                />
              </td>
              <td className="addCell">
                <i className="fas fa-plus" onClick={this.addFriend} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default App
