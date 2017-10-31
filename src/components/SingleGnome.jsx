import React, { Component } from 'react'
import EditGnome from './EditGnome.jsx'

//stateless component
export default class SingleGnome extends Component{
    constructor(props){
        super(props)
        this.state={
            render: false
        }
    }
    handleGnomeClick = () =>{
        if(this.state.render){
            this.setState({
                render:false
            })
        }
        this.setState({
            render:true
        })
    }
    render(){
        return(
            <li onClick = {this.handleGnomeClick}>
                <p>{this.props.gnome.name}</p>
                <p>{this.props.gnome.age}</p>
                <p>{this.props.gnome.strenght}</p>
                {this.state.render && <EditGnome />}
            </li>
        )
    }
}