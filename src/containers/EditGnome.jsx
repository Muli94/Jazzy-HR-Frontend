import React, { Component } from 'react'
import { updateGnome } from '../actions'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

class EditGnome extends Component{
    renderField({ label, type, input, value }){
        return(
            <div>
                <label className="edit__gnome-label">
                    {label}
                </label>
                <input 
                    type={type}
                    {...input}
                />
            </div>
        )
    }
    onSubmit = (values) =>{
        this.props.updateGnome(values, this.props.id)
    }
    handleCancelButton = () =>{
        this.props.onGnomeClick(false)
    }
    render(){
        const { gnome:{ name, age, strenght }} = this.props
        const { handleSubmit } = this.props
        return(
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <Field 
                    label="Name"
                    name="name"
                    type="text"
                    component={this.renderField}
                />
                <Field 
                    label="Age"
                    name="age"
                    type="number"
                    component={this.renderField}
                />
                <Field 
                    label="Strength"
                    name="strength"
                    type="number"
                    component={this.renderField}
                />
                <button type="submit" className="edit__button button__save">
                    Save
                </button>
                <button type="button" className="edit__button button__cancel" onClick={this.handleCancelButton}>
                    Cancel
                </button>
            </form>
        )
    }
}

function validate(values){
    if(!values.name){

    }
    if(!values.age){

    }
    if(!values.strength){
        
    }
}

export default reduxForm({
    validate,
    form: 'EditGnome'
})(connect(null, { updateGnome })(EditGnome))