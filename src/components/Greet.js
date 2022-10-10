import React from 'react'

const Greet = props => {
    const {name,heroName} = props
    // const {state1, state2} = this.state
  return (
      <>
     
        <div> Hello {name} a.k.a {heroName}</div>
        
    </>
  )
}

export default Greet