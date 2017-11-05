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
    strenght: PropTypes.number
  })).isRequired,
};

const defaultProps = {
  gnomes: []
}

class GnomeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: 15,
    };
  }
    componentDidMount=() => {
      this.props.fetchGnomes(this.state.limit);
    }
    handleLoadMoreClick = () => {
      let nextLimit = this.state.limit;
      nextLimit += 15;
      this.props.fetchGnomes(nextLimit);
      this.setState({
        limit: nextLimit,
      });
    }
    render() {
      return (
        <div className="gnome__list-wrapper">
          <div className="container">
            <h1 className="list__title">
                        Gnomes
            </h1>
            <ul className="gnome__list">
              {this.props.gnomes.map(oneGnome =>
                (<SingleGnome
                  gnome={oneGnome}
                  key={oneGnome.id}
                />))}
              <div
                onClick={this.handleLoadMoreClick}
                className="load__button"
                role="button"
                tabIndex="-1"
              >
                            Load more
              </div>
            </ul>
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
