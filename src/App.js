import React from 'react'
import Editor from './components/Editor'

const App = () => {
  return (
    <div>
      <Editor fields={['brand', 'model', 'year']} />
    </div>
  )
}

export default App

