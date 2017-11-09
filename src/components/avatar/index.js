import React from 'react'

function Avatar(props){
    return (
        <img src={props.user.avatar} height="150" alt={ props.user.name }/>
    )
}
export {Avatar}