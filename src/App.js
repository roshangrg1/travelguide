import React from 'react'

import './App.scss'
import List from './components/List/List'
import Header from './components/Header/Header'
import Map from './components/Map/Map'



const App = () => {
  return (
    <div>
      <Header />
      <div className='mapList'>
        <List />
        <Map />
      </div>


    </div>
  )
}

export default App