import React, { Component } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'

class Smurf extends Component {
  onClick = () => {
    Axios.delete(`http://localhost:3333/smurfs/${this.props.id}`)
      .then(response => this.props.deleteSmurf(response.data))
      .catch(error => console.error(error))
  }

  render() {
    return (
      <Link to={`/smurf/${this.props.id}`} style={{ textDecoration: 'none' }}>
        <div className="smurf">
          <i className="fas fa-times" onClick={this.onClick} />
          <h3>{this.props.name}</h3>
          <p>{this.props.height} cm tall</p>
          <p>{this.props.age} smurf years old</p>
        </div>
      </Link>
    )
  }
}

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
}

export default Smurf
