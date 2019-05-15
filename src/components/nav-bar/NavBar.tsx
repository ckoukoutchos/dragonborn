import React, { Component } from 'react';
import { connect } from 'react-redux';

import { AppState } from '../../store/rootReducer';

import classes from './NavBar.module.css';
import NavItem from './nav-items/NavItem';

interface NavBarProps {
  user: any;
}

interface NavBarState {
  menuToggle: boolean;
}

// TODO: fix wonky resolution issues

class NavBar extends Component<any, NavBarState> {
  state = {
    menuToggle: false
  };

  /**
   * @name onMenuToggle
   * @description toogles menu open/closed state
   */
  onMenuToggle = (): void => {
    this.setState((prevState: NavBarState) => {
      return { menuToggle: !prevState.menuToggle };
    });
  };

  render() {
    return (
      <header className={classes.NavBar}>
        <div className={classes.Logo}>
          <NavItem link="/" exact>
            Dragonborn
          </NavItem>
        </div>

        {this.props.user ? (
          <div>
            <nav className={classes.Links}>
              <NavItem link="/create">Create</NavItem>
              <NavItem link="/track">Track</NavItem>
              <NavItem link="/guide">Guide</NavItem>
              <NavItem link="/profile">Profile</NavItem>
              <NavItem link="/logout">Logout</NavItem>
            </nav>
            <div className={classes.Menu} onClick={this.onMenuToggle}>
              {this.state.menuToggle ? 'Close' : 'Menu'}
            </div>
          </div>
        ) : (
          <div>
            <nav className={classes.Links}>
              <NavItem link="/login">Login</NavItem>
            </nav>
            <div className={classes.Menu}>
              <NavItem link="/login">Login</NavItem>
            </div>
          </div>
        )}

        {this.state.menuToggle ? (
          <div className={classes.MenuContainer} onClick={this.onMenuToggle}>
            <nav>
              <NavItem link="/create" menu>
                Create
              </NavItem>
              <NavItem link="/track" menu>
                Track
              </NavItem>
              <NavItem link="/guide" menu>
                Guide
              </NavItem>
              <NavItem link="/profile" menu>
                Profile
              </NavItem>
              <NavItem link="/logout" menu>
                LogOut
              </NavItem>
            </nav>
          </div>
        ) : null}
      </header>
    );
  }
}

const mapStatetoProps = (state: AppState) => ({
  user: state.auth.user
});

export default connect(mapStatetoProps)(NavBar);
