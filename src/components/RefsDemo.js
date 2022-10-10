import React, { Component } from 'react'

 class RefsDemo extends Component {
     constructor(props) {
       super(props)
     
       this.inputRef = React.createRef()
       this.cbRef = null
       this.setCbRef = (element) =>{
           this.cbRef = element
       }
     }
     componentDidMount(){
         if(this.cfRef){
             this.cbRef.focus()
         }
        //  this.inputRef.current.focus()
        //  console.log(this.inputRef)
     }
     clickHandler = () =>{
         alert(this.inputRef.current.value)
     }
  render() {
    return (
      <div>
          <input type="" ref={this.inputRef}/>
          <input type="" ref={this.setCbRef}/>
          <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default RefsDemo