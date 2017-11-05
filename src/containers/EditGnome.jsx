import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { updateGnome } from '../actions';

const propTypes={
  updateGnome: PropTypes.func.isRequired,
  onGnomeClick: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  gnome: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    age: PropTypes.number,
    strenght: PropTypes.number
  })
}

class EditGnome extends Component {
    onSubmit = (values) => {
      this.props.updateGnome(values, id);
    }
    handleCancelButton = () => {
      this.props.onGnomeClick(false);
    }
    renderField({
      label, type, input, name,
    }) {
      return (
        <div className="edit__gnome-input__wrapper">
          <label
            className="edit__gnome-label"
            htmlFor={`${name}`}
          >
            {`${label}:`}
          </label>
          <input
            id={`${name}`}
            type={type}
            {...input}
          />
        </div>
      );
    }
    render() {
      const { gnome:{id}, handleSubmit } = this.props;
      return (
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
          <button
            type="submit"
            className="edit__button button__save"
          >
                    Save
          </button>
          <button
            type="button"
            className="edit__button button__cancel"
            onClick={this.handleCancelButton}
          >
                    Cancel
          </button>
        </form>
      );
    }
}

function validate(values) {
  if (!values.name) {
  }
  if (!values.age) {
  }
  if (!values.strength) {
  }
}

EditGnome.propTypes = propTypes;

export default reduxForm({
  validate,
  form: 'EditGnome',
})(connect(null, { updateGnome })(EditGnome));
