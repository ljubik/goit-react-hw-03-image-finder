import React, { Component } from 'react';

import style from './Searchbar.module.css';

class Searchbar extends Component {
  state = { value: '' };

  handleInputChange = event => {
    const { value } = event.currentTarget;

    this.setState({
      value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.state.value && this.props.onSubmit(this.state.value);

    this.reset();
  };

  reset = () => {
    this.setState({ value: '' });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.value}
            onChange={this.handleInputChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
