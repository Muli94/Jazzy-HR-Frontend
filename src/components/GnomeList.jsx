import React, { Component } from 'react'
import SingleGnome from './SingleGnome'

export default class GnomeList extends Component{
    render(){
        return(
            <ul>
                <SingleGnome />
            </ul>
        )
    }
}