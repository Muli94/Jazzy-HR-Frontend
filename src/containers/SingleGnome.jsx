import React, { Component } from 'react'
import { connect } from 'react-redux'
import EditGnome from './EditGnome.jsx'

class SingleGnome extends Component{
    constructor(props){
        super(props)

        this.state={
            display:false
        }
    }
    handleGnomeClick = (display=true) =>{
       this.setState({
           display,
       })
    }
    render(){
        const { gnome:{ id, name, age, strenght }} = this.props
        return(
            <li className="gnome__list-single">
                <div className="gnome__list-content"onClick = {this.handleGnomeClick}>
                    <p className="gnome__text-name">
                        {name}
                    </p>
                    <p className="gnome__text-age">
                        {age}
                    </p>
                    <p className="gnome__text-strength">
                        {strenght}
                    </p>
                </div>
                {this.state.display ? <EditGnome gnome={this.props.gnome} onGnomeClick={this.handleGnomeClick}/> : null}
            </li>
        )
    }
}

export default SingleGnome