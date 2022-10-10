import React, { Component } from 'react'
import MemoComponent from './MemoComponent'
// import PureComp from './PureComponent'
// import RegComp from './RegComp'

export class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
       name: 'James'
      }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name: 'James'
            })
        }, 2000)
    }
  render() {
      console.log('*********************Parent Comp render***********************')
    return (
      <div>
          ParentComp
          <MemoComponent name={this.state.name}/>
          {/* <RegComp name={this.state.name}/>
          <PureComp name={this.state.name}/> */}
      </div>
    )
  }
}

export default ParentComp