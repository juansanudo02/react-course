import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        isLoggedIn: true
      }
    }
  render() {

   return this.state.isLoggedIn && <div> Welcome James</div>

        // return(
        //     this.state.isLoggedIn ?
        //      <div>Welcome James</div> :
        //      <div>Welcome Guest</div>
        // )


    // let message
    // if(this.state.isLoggedIn){
    //     message = <div>Welcome James</div>
    // }else{
    //     message = <div>Welcome Guest</div>
    // }
    // return(
    //     <div>{message}</div>
    // )
    //   if(this.state.isLoggedIn){
    //       return(
    //           <div>
    //               Welcom James
    //           </div>
    //       )
    //   }else{
    //       return(
    //           <div> Welcome Guest</div>
    //       )
    //   }
    // return (
    //  <>
    //   <div> Welcome james </div>
    //   <div> Welcome Guest </div>
    //  </>
     
    // )
  }
}

export default UserGreeting