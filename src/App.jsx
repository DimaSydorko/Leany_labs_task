import './App.css'
import React from 'react'
import SearchField from './components/search'
import AboutLocation from './components/aboutLocation';

const App = () => {
  return (
    <div className="App">
      <div className="App-Bg"/>
      <div className="page">
        <header>
          Find My IP
        </header>
        <SearchField/>
        <AboutLocation/>
      </div>
    </div>
  )
}

export default App;