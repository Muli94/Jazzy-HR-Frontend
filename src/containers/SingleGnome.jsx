import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EditGnome from './EditGnome';
import gnomeLogo from '../../assets/gnome_logo.png';

const propTypes = {
  gnome: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    age: PropTypes.number,
    strenght: PropTypes.number,
  }).isRequired,
};

class SingleGnome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display: false,
    };
  }
  handleGnomeClick = (display = true) => {
    // display edit form
    this.setState({
      display,
    });
  }
  render() {
    const { gnome, gnome: { name, age, strenght } } = this.props;
    return (
      <li className="gnome__list-single">
        <div
          className="gnome__list-content"
          onClick={this.handleGnomeClick}
        >
          <img src={gnomeLogo} alt="gnome" />
          <div className="gnome__list-info__wrapper">
            <p className="gnome__list-name__text">
              {name}
            </p>
            <p className="gnome__list-age__text">
              Age:{age}
            </p>
          </div>
          <div className="gnome__list-bar">
            <div
              className="gnome__list-bar-helper darker"
              style={{ width: 250 * (strenght / 2) / 100 }}
            />
            <div
              className="gnome__list-bar-helper bright"
              style={{ width: ((250 * strenght) / 100) }}
            />
          </div>
          <p className="gnome__list-strength__text">
            {`${strenght}/100`}
            <strong>Strength</strong>
          </p>
        </div>
        <div className="edit__gnome-form">
          {this.state.display ?
            <EditGnome
              gnome={gnome}
              onGnomeClick={this.handleGnomeClick}
            /> 
            : null}
        </div>
      </li>
    );
  }
}

SingleGnome.propTypes = propTypes;

export default SingleGnome;
