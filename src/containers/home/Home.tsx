// library
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

// store
import { AppState } from '../../store/rootReducer';

// components
import Button from '../../components/button/Button';
import classes from './Home.module.css';
import Jumbotron from '../../components/jumbotron/Jumbotron';
import SideCard from '../../components/card/side-card/SideCard';
import BasicCard from '../../components/card/basic-card/BasicCard';

// shared
import { User } from '../../models/User';

interface HomeProps {
  history: any;
  user: User | null;
}

/*
 * Container for home page
 */
class Home extends Component<HomeProps> {
  /**
   * @name onSignup
   * @description redirects to signup page
   */
  onSignup = () => {
    this.props.history.push('/signup');
  };

  render() {
    const { user } = this.props;

    // redirect if already signed in
    let authRedirect = null;
    if (user) {
      authRedirect = <Redirect to='/dashboard' />;
    }

    return (
      <>
        {authRedirect}

        <Jumbotron header='Dragonborn' subHeader='Adventure awaits!' />

        <div className={classes.Center}>
          <SideCard align='Left' title='Create'>
            <h3 className={classes.Center}>
              Create a hero for the ages with the hero builder:
            </h3>

            <p className={classes.Center}>
              Step-by-step builder to help you choose your class, weapons,
              spells, gear, and more!
            </p>
          </SideCard>

          <SideCard align='Right' title='Track'>
            <h3 className={classes.Center}>
              Track your heroes as they play through epic adventures:
            </h3>

            <p className={classes.Center}>
              Includes character sheet and a PLAY section to help you keep tabs
              on the action!
            </p>
          </SideCard>

          <SideCard align='Left' title='Guide'>
            <h3 className={classes.Center}>
              Guide your friends on a whirlwind campaign:
            </h3>

            <p className={classes.Center}>
              See the state of your adventure and adventurers in real-time!
            </p>
          </SideCard>
        </div>

        <BasicCard title='Begin Your Journey'>
          <div className={classes.Center}>
            <Button btnType='Raised' color='Primary' clicked={this.onSignup}>
              Sign Up
            </Button>
          </div>
        </BasicCard>
      </>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  user: state.auth.user
});

export default connect(mapStateToProps)(Home);
