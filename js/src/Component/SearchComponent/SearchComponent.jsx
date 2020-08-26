import React, { Component, Fragment } from 'react';
import './Search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
class SearchComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
    };
  }
  handleChange = (e) => {
    this.setState({ term: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state.term);
    this.props.FromHeaderFormSubmit(this.state.term);
  };

  render() {
    return (
      <Fragment>
        <div className="searchBlock">
          <section>
            <form id="form" onSubmit={this.handleSubmit}>
              <div className="searchInput">
                <input
                  type="text"
                  placeholder="Search here"
                  value={this.state.term}
                  onChange={this.handleChange}
                />
                <button className="ui button">
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </div>
            </form>
          </section>
        </div>
      </Fragment>
    );
  }
}

export default SearchComponent;
