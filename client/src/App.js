import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import SavedList from './Movies/SavedList'
import MovieList from './Movies/MovieList'
import Movie from './Movies/Movie'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      savedList: []
    }
  }

  render() {
    return (
      <React.Fragment>
        <SavedList list={this.state.savedList} />
        <Route exact path="/" component={MovieList} />
        <Route path="/movies/:id" component={Movie} />
      </React.Fragment>
    )
  }
}
