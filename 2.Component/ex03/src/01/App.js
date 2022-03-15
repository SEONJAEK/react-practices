import React from 'react'

const App = () => {
  return (
    <h1
        onClick={ e => console.log('click!') }
        style={{
            cursor:'pointer'
        }}>
            ex03:InlineHandler
    </h1>
  )
}

export default App