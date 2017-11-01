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
        this.setState({
            render:true
        })
    }
    render(){
        return(
            <li 
                onClick = {this.handleGnomeClick}
                className="single__gnome"
            >
                <p className="gnome__text-name">{this.props.gnome.name}</p>
                <p className="gnome__text-age">{this.props.gnome.age}</p>
                <p className="gnome__text-strength">{this.props.gnome.strenght}</p>
                {this.state.render ? <EditGnome id={this.props.gnome.id}/> : null}
            </li>
        )
    }
}