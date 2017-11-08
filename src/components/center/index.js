import React,{Component} from 'react'
import './index.css'

function Menu(props){
    return (
    <ul>
        <li> it is 1 :{props.date.toLocaleString()} </li>
        <li> it is 2 :{props.date.toLocaleString()} </li>
        <li> it is 3 :{props.date.toLocaleString()} </li>
    </ul>
    )
}
export {Menu}

