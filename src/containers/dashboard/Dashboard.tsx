// library
import React, { Component, Dispatch } from 'react';
import { connect } from 'react-redux';

// store
import { AppState } from '../../store/rootReducer';
import { createHero } from '../../store/hero/heroActionCreators';
import { HeroActionTypes } from '../../store/hero/heroActionTypes';

// components
import Create from '../create/Create';
import Jumbotron from '../../components/jumbotron/Jumbotron';
import Profile from '../../containers/auth/profile/Profile';
import SecondaryCard from '../../components/card/secondary-card/SecondaryCard';
import TitleCard from '../../components/card/title-card/TitleCard';
import Track from '../track/Track';

// shared
import Hero from '../../models/Hero';

class Dashboard extends Component<any> {
  signup = () => {
    this.props.history.push('/signup');
  };

  render() {
    const { user } = this.props;

    return (
      <>
        <Jumbotron
          header="Dragonborn"
          subHeader={
            user.displayName ? `${user.displayName}'s Dashboard` : 'DashBoard'
          }
        />

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Create />
          <Track />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <TitleCard subTitle="Troll-in-chief" title="Guide">
            <SecondaryCard label="Campaign Guide" wide>
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

const mapDispatchToProps = (dispatch: Dispatch<HeroActionTypes>) => ({
  createHero: (hero: Hero, route: any, uid: string) =>
    dispatch(createHero(hero, route, uid))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
