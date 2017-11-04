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
                <div className="gnome__list-content" onClick = {this.handleGnomeClick}>
                    <img src="../../assets/gnome_logo.png" alt="gnome_pic"/>
                    <div className="gnome__list-info__wrapper">
                        <p className="gnome__list-name__text">
                            {name}
                        </p>
                        <p className="gnome__list-age__text">
                            Age:{age}
                        </p>
                    </div>
                    <div className="gnome__list-bar">
                        <div className="gnome__list-bar-helper darker"></div>
                        <div 
                            className="gnome__list-bar-helper bright"
                            style={{width: (250*strenght)/100}}
                        >
                        </div>
                    </div>
                    <p className="gnome__list-strength__text">
                        {`${strenght}/100`} <strong>Strength</strong>
                    </p>
                </div>
                <div className="edit__gnome-form">
                    {this.state.display ? <EditGnome gnome={this.props.gnome} onGnomeClick={this.handleGnomeClick}/> : null}
                </div>
            </li>
        )
    }
}

export default SingleGnome