import React, { Component } from 'react';
import { connect } from 'react-redux';

import { AppState } from '../../store/rootReducer';

import classes from './NavBar.module.css';
import NavItem from './nav-items/NavItem';
import { User } from '../../models/User';

interface NavBarProps {
  user: User | null;
}

class NavBar extends Component<NavBarProps> {
  render() {
    let navBar = (
      <header className={classes.NavBar}>
        <NavItem link="/">Dragonborn</NavItem>
        <NavItem link="/login">Login</NavItem>
      </header>
    );

    if (this.props.user) {
      navBar = (
        <header className={classes.NavBar}>
          <NavItem link="/dashboard">Dashboard</NavItem>
          <NavItem link="/logout">Logout</NavItem>
        </header>
      );
    }

    return navBar;
  }
}

const mapStatetoProps = (state: AppState) => ({
  user: state.auth.user
});

export default connect(mapStatetoProps)(NavBar);
