import React, { Component } from 'react'


class LifeCycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Juan'
      }
      console.log('LifecycleB constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifecycleB constructor')
     return null
    }
    componentDidMount(){
        console.log('LifecylceB componentDidMount')
    }
    shouldComponentUpdate(){
        console.log('LifecycleB shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifecycleB getSnapshotVefoeUpdate')
    }
    componentDidUpdate(){
        console.log('LifecycleB componentDidUpdate')
    }
  render() {
      console.log('LifecycleB render')
    return (
      <div>LifeCycleB</div>
    )
  }
}

export default LifeCycleB