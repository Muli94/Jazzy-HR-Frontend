import React, { Component } from 'react'

//stateless component
function SingleGnome(props){
    return(
        <li>
            <p>{props.gnome.name}</p>
            <p>{props.gnome.age}</p>
            <p>{props.gnome.strenght}</p>
        </li>
    )
}

export default SingleGnome