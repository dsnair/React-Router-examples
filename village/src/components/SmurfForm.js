import React, { Component } from 'react'
import Axios from 'axios'

class SmurfForm extends Component {
  state = {
    name: '',
    age: '',
    height: ''
  }

  onSubmit = event => {
    event.preventDefault()

    if (!this.state.name || !this.state.age || !this.state.height) return

    const newSmurf = {
      id: this.props.smurfs.length,
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    }

    Axios.post('http://localhost:3333/smurfs', newSmurf)
      .then(() => {
        this.props.addSmurf(newSmurf)
        this.setState({ name: '', age: '', height: '' })
      })
      .catch(error => console.error(error))
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} className="smurfForm">
        <input
          onChange={this.handleInputChange}
          placeholder="Name"
          type="text"
          value={this.state.name}
          name="name"
        />
        <input
          onChange={this.handleInputChange}
          placeholder="Age"
          type="number"
          value={this.state.age}
          name="age"
        />
        <input
          onChange={this.handleInputChange}
          placeholder="Height"
          type="number"
          value={this.state.height}
          name="height"
        />
        <button type="submit">Add to the Village</button>
      </form>
    )
  }
}

export default SmurfForm
