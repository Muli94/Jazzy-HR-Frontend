import React, { Component } from 'react'
import Header from './Header.jsx'
import GnomeList from './GnomeList.jsx'

export default class App extends Component{
    render(){
        return(
        <div>
            <Header />
            <GnomeList />
        </div>
        )
    }
}