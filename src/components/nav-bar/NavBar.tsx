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
class NavBar extends Component<NavBarProps, NavBarState> {
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
          {this.props.user ? (
            <>
              <NavItem link="/create" exact>
                Create
              </NavItem>
              <NavItem link="/track" exact>
                Track
              </NavItem>
              <NavItem link="/guide" exact>
                Guide
              </NavItem>
              <NavItem link="/auth" exact>
                Logout
              </NavItem>
            </>
          ) : (
            <NavItem link="/auth" exact>
              Login
            </NavItem>
          )}
        </nav>

        {this.props.user ? (
          <div className={classes.Menu} onClick={this.onMenuToggle}>
            {this.state.menuToggle ? 'Close' : 'Menu'}
          </div>
        ) : (
          <div className={classes.Menu}>
            <NavItem link="/auth" exact>
              Login
            </NavItem>
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

const mapStatetoProps = (state: AppState) => ({
  user: state.auth.user
});

export default connect(mapStatetoProps)(NavBar);
