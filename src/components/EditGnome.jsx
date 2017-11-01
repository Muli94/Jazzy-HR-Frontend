import React, { Component } from 'react'
import { updateGnome } from '../actions'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

class EditGnome extends Component{
    renderField(field){
        return(
            <div>
                <label htmlFor="">{field.label}</label>
                <input 
                    type="text"
                    {...field.input}
                />
            </div>
        )
    }
    onSubmit = (values) =>{
        this.props.updateGnome(values, this.props.id)
    }
    render(){
        const { handleSubmit } = this.props
        return(
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <Field 
                    label="Name"
                    name="name"
                    component={this.renderField}
                />
                <Field 
                    label="Age"
                    name="age"
                    component={this.renderField}
                />
                <Field 
                    label="Strength"
                    name="strength"
                    component={this.renderField}
                />
                <button className="edit__button-save">Save</button>
                <button className="edit__button-cancel">Cancel</button>
            </form>
        )
    }
}

function validate(){
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