import React, { Component } from 'react';

import classes from './NavBar.module.css';
import NavItem from './nav-items/NavItem';

class NavBar extends Component {
  state = {
    menuToggle: false
  };

  onMenuToggle = () => {
    this.setState(prevState => {
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
          <NavItem link="/logout" exact>
            LogOut
          </NavItem>
        </nav>
        <div className={classes.Menu} onClick={this.onMenuToggle}>
          Menu
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
