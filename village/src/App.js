import React, { Component } from 'react'
import Axios from 'axios'
import { Route, NavLink } from 'react-router-dom'

import './App.css'
import SmurfForm from './components/SmurfForm'
import Smurfs from './components/Smurfs'
import Smurf from './components/Smurf'

class App extends Component {
  state = {
    smurfs: []
  }

  componentDidMount() {
    Axios.get('http://localhost:3333/smurfs')
      .then(response => this.setState({ smurfs: response.data }))
      .catch(error => console.error(error))
  }

  addSmurf = smurf => this.setState({ smurfs: [...this.state.smurfs, smurf] })

  deleteSmurf = smurfs => this.setState({ smurfs })

  render() {
    return (
      <div className="app">
        <div className="top-section">
          <h1>Smurf Village</h1>
          <nav>
            <NavLink
              exact
              to="/"
              activeStyle={{
                color: 'hotpink',
                border: '1px solid hotpink',
                padding: '10px'
              }}
              style={{
                textDecoration: 'none',
                fontSize: 22,
                color: 'darkslategray',
                border: '1px solid darkslategray',
                padding: '10px'
              }}
            >
              Home
            </NavLink>
            <NavLink
              to="/smurf-form"
              activeStyle={{
                color: 'hotpink',
                border: '1px solid hotpink',
                padding: '10px'
              }}
              style={{
                textDecoration: 'none',
                fontSize: 22,
                color: 'darkslategray',
                border: '1px solid darkslategray',
                padding: '10px'
              }}
            >
              Add New Smurf
            </NavLink>
          </nav>
        </div>
        <Route
          path="/"
          exact
          render={() => (
            <Smurfs smurfs={this.state.smurfs} deleteSmurf={this.deleteSmurf} />
          )}
        />
        <Route
          path="/smurf-form"
          render={() => (
            <SmurfForm smurfs={this.state.smurfs} addSmurf={this.addSmurf} />
          )}
        />
        <Route
          path="/smurf/:id"
          exact
          render={props => {
            const id = Number(props.match.params.id)
            const smurf = this.state.smurfs.find(smurf => smurf.id === id)
            return (
              <Smurf
                name={smurf.name}
                age={smurf.age}
                height={smurf.height}
                id={smurf.id}
              />
            )
          }}
        />
      </div>
    )
  }
}

export default App
