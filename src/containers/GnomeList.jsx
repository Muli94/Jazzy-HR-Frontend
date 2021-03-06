import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchGnomes } from '../actions';

import SingleGnome from './SingleGnome';

const propTypes = {
  fetchGnomes: PropTypes.func.isRequired,
  gnomes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    age: PropTypes.number,
    strenght: PropTypes.number,
  })),
};

const defaultProps = {
  gnomes: [],
};

class GnomeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
    };
  }
  componentDidMount=() => {
    // fetch gnomes
    this.props.fetchGnomes(this.state.offset);
  }
  handleLoadMoreClick = () => {
    // on Load button click: set new offset value for fetch gnomes
    let nextOffset = this.state.offset;
    nextOffset += 50;
    this.props.fetchGnomes(nextOffset);
    this.setState({
      offset: nextOffset,
    });
  }
  render() {
    const { gnomes } = this.props
    return (
      <div className="gnome__list-wrapper">
        <div className="container">
          <h1 className="list__title">
              Gnomes
          </h1>
          <ul className="gnome__list">
            {gnomes.map(oneGnome =>
              (<SingleGnome
                gnome={oneGnome}
                key={oneGnome.id}
              />))}
          </ul>
          <div
            onClick={this.handleLoadMoreClick}
            className="load__button"
            role="button"
            tabIndex="-1"
          >
            Load more
          </div>
        </div>
      </div>
    );
  }
}

GnomeList.propTypes = propTypes;
GnomeList.defaultProps = defaultProps;

const mapStateToProps = ({ gnomes }) => ({
  gnomes,
});
export default connect(mapStateToProps, { fetchGnomes })(GnomeList);
