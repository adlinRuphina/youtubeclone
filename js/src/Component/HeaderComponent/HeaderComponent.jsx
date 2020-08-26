import React, { Component, Fragment } from 'react';
import './Header.css';
import SearchComponent from '../SearchComponent/SearchComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faVideo,
  faTh,
  faBell,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        <section id="header">
          <article>
            <div className="logo">
              {/*<FontAwesomeIcon icon={faBars} /> <FontAwesomeIcon icon={faVideo} />      <FontAwesomeIcon icon={faUserCircle} />  <FontAwesomeIcon icon={faTh} />  <FontAwesomeIcon icon={faBell} />*/}
              <FontAwesomeIcon icon={faBars} />
              <img
                src="https://images.financialexpress.com/2017/11/youtubelogo-620x413.png"
                alt=""
              />
            </div>
            <div className="search">
              <SearchComponent
                FromHeaderFormSubmit={this.props.FromAppFormSubmit}
              />
            </div>
            <div className="login">
              <span className="video">
                <FontAwesomeIcon icon={faVideo} />
              </span>
              <span className="grid">
                <FontAwesomeIcon icon={faTh} />
              </span>

              <span className="noti">
                <FontAwesomeIcon icon={faBell} />
              </span>
              <span>
                {' '}
                <FontAwesomeIcon icon={faUserCircle} />
                <a href="">SignIn</a>
              </span>
            </div>
          </article>
        </section>
      </Fragment>
    );
  }
}

export default HeaderComponent;
