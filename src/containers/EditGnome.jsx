import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { updateGnome } from '../actions';

const propTypes = {
  updateGnome: PropTypes.func.isRequired,
  onGnomeClick: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  gnome: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    age: PropTypes.number,
    strenght: PropTypes.number,
  }).isRequired,
};

class EditGnome extends Component {
  onSubmit = (values) => {
    const {
      gnome: {
        name, age, strenght, id,
      },
      updateGnome,
      onGnomeClick
    } = this.props;
    // if user will submit empty input old value will be send
    if (!values.name) {
      values.name = name;
    }
    if (!values.age) {
      values.age = age;
    }
    if (!values.strenght) {
      values.strenght = strenght;
    }
    updateGnome(values, id);
    onGnomeClick(false);
  }
  handleCancelButton = () => {
    // pass false to hide form
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
          placeholder={`Type new ${label}`}
          {...input}
        />
      </div>
    );
  }
  render() {
    const { handleSubmit } = this.props;
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
          label="Strenght"
          name="strenght"
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

EditGnome.propTypes = propTypes;

export default reduxForm({
  form: 'EditGnome',
})(connect(null, { updateGnome })(EditGnome));
