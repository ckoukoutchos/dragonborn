import React, { Component } from 'react';

import classes from './NavBar.module.css';
import NavItem from './nav-items/NavItem';

interface NavBarState {
  menuToggle: boolean;
}

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

        <nav className={classes.Links}>
          <NavItem link="/create">Create</NavItem>
          <NavItem link="/track">Track</NavItem>
          <NavItem link="/guide">Guide</NavItem>
          <NavItem link="/login" exact>
            Login
          </NavItem>
        </nav>

        <div className={classes.Menu} onClick={this.onMenuToggle}>
          {this.state.menuToggle ? 'Close' : 'Menu'}
        </div>

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
              <NavItem link="/logout" exact menu>
                LogOut
              </NavItem>
            </nav>
          </div>
        ) : null}
      </header>
    );
  }
}

export default NavBar;