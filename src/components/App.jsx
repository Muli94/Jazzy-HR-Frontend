import React, { Component } from 'react'
import Header from './Header.jsx'
import GnomeList from './../containers/GnomeList.jsx'

export default class App extends Component{
    render(){
        return(
        <div className="container">
            <Header />
            <GnomeList />
        </div>
        )
    }
}