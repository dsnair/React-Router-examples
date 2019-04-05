import React from 'react'
import Smurf from './Smurf'

const Smurfs = props => {
  return (
    <div className="smurfs">
      {props.smurfs.map(smurf => {
        return (
          <Smurf
            name={smurf.name}
            age={smurf.age}
            height={smurf.height}
            deleteSmurf={props.deleteSmurf}
            id={smurf.id}
            key={smurf.id}
          />
        )
      })}
    </div>
  )
}

Smurf.defaultProps = {
  smurfs: []
}

export default Smurfs
