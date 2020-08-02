import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  state = {
    text: '',
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.text === '') {
      this.props.setAlert('Please enter text', 'danger');
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: '' });
    }
  };

  render() {
    const { showClear, clearUsers } = this.props;
    return (
      <Fragment>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="text"
            placeholder="Search users..."
            className="form-control mb-3"
            value={this.state.text}
            onChange={this.onChange}
          />
          <button type="submit" className="btn btn-block btn-primary mb-3">
            Search
          </button>
        </form>
        {showClear && (
          <button
            className="btn btn-outline-warning btn-block mb-3"
            onClick={clearUsers}>
            Clear
          </button>
        )}
      </Fragment>
    );
  }
}

export default Search;
