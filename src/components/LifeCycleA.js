import React, { Component } from 'react'
import LifeCycleB from './LyfeCycleB'
class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Juan'
      }
      console.log('LifecycleA constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifecycleA constructor')
     return null
    }
    componentDidMount(){
        console.log('LifecylceA componentDidMount')
    }
    shouldComponentUpdate(){
        console.log('LifecycleA shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('Lifecycle getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate(){
        console.log('LifecycleA componentDidUpdate')
    }
    changeState = () =>{
        this.setState({
            name:'CodeVolution'
        })
    }

  render() {
      console.log('LifecycleA render')
    return (
     <>
      <div>LifeCycleA</div>
      <button onChange={this.changeState}>change state</button>
      <LifeCycleB/>     
     </>
     
    )
  }
}

export default LifeCycleA