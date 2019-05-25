// library
import React, { Component } from 'react';
import { connect } from 'react-redux';

// store
import { AppState } from '../../store/rootReducer';

// components
import Create from '../create/Create';
import classes from './Dashboard.module.css';
import Jumbotron from '../../components/jumbotron/Jumbotron';
import Profile from '../../containers/auth/profile/Profile';
import SecondaryCard from '../../components/card/secondary-card/SecondaryCard';
import TitleCard from '../../components/card/title-card/TitleCard';
import Track from '../track/Track';

// shared
import { User } from '../../models/User';

interface DashboardProps {
  user: User | null;
}

/*
 * dashboard container widget
 */
class Dashboard extends Component<DashboardProps> {
  render() {
    const { user } = this.props;

    let subTitle = '';
    if (user) {
      subTitle = user.displayName
        ? `${user.displayName}'s Dashboard`
        : 'DashBoard';
    }

    return (
      <>
        <Jumbotron header='Dragonborn' subHeader={subTitle} />

        <div className={classes.Column}>
          <Create />
          <Track />
        </div>

        <div className={classes.Column}>
          <TitleCard subTitle='Troll-in-chief' title='Guide'>
            <SecondaryCard label='Campaign Guide' wide>
              <p>Lead your friends on an epic adventure! Coming in phase 4.</p>
            </SecondaryCard>
          </TitleCard>

          <Profile />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  user: state.auth.user
});

export default connect(mapStateToProps)(Dashboard);
