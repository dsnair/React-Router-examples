import React from 'react'
import { Route } from 'react-router-dom'
import { Home, About, Contact, Navigation } from './components'
import './App.css'

const App = () => (
  <div>
    <Navigation />
    <Route path="/" exact component={Home} />
    <Route path="/about/" component={About} />
    <Route path="/contact" component={Contact} />
  </div>
)

export default App