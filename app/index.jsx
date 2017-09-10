import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root.jsx'

// function Root (props) {
//     var style = {
//         thing1: {
//             background: 'red'
//         },
//         thing2: {
//             background: 'green'
//         }
//     }
//     return (
//         <div>
//             <OtherComp name={props.name1} style={style.thing1}/>
//             <OtherComp name={props.name2} style={style.thing2} />
//         </div>
//     )
// }


// function OtherComp (props) {
//     return <h1 style={props.style}>{props.name}</h1>
// }


ReactDOM.render(<Root/>, document.getElementById('app'))