import React from 'react'

const Hello = () =>{
    // return (
    //     <div>
    //         <h1>Hello Juan</h1>
    //     </div>
    // )

    return React.createElement(
        'div',
         {id: 'Hello', className: 'dummyClass'},
         React.createElement('h1',null, 'Hello World') )
}


export default Hello