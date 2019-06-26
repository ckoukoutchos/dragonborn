// library
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { withRouter } from 'react-router-dom';

// store
import { AppState } from '../../store/rootReducer';
import {
  deleteHero,
  fetchHeroes,
  getHero
} from '../../store/hero/heroActionCreators';
import { HeroActionTypes } from '../../store/hero/heroActionTypes';

// components
import Button from '../../components/UI/button/Button';
import classes from './Track.module.css';
import Input from '../../components/UI/input/Input';
import Modal from '../../components/UI/modal/Modal';
import SecondaryCard from '../../components/UI/card/secondary-card/SecondaryCard';
import Spinner from '../../components/UI/spinner/Spinner';
import TitleCard from '../../components/UI/card/title-card/TitleCard';

// shared
import Hero from '../../models/Hero';

interface TrackProps {
  history: any;
  heroes: Hero[];
  loading: boolean;
  user: any;
  deleteHero: (heroId: number, uid: string) => HeroActionTypes;
  fetchHeroes: (uid: string) => HeroActionTypes;
  getHero: (heroId: number) => HeroActionTypes;
}

interface TrackState {
  heroId: number | null;
  showModal: boolean;
}

// TODO: clean up render function, move into funcs

/*
 * Container for Track page
 */
class Track extends Component<TrackProps, TrackState> {
  state = {
    heroId: 0,
    showModal: false
  };

  componentDidMount() {
    this.props.fetchHeroes(this.props.user.uid);
  }

  /**
   * @name onHeroDeletion
   * @description on hero deleted, close modal and set hero to null, dispatch acction to delete
   */
  onHeroDeletion = () => {
    this.setState({ heroId: null, showModal: false });

    if (this.state.heroId) {
      this.props.deleteHero(this.state.heroId, this.props.user.uid);
    }
  };

  // TODO: refactor getHero to cleaner solution
  onHeroSelection = (heroId: number) => () => {
    this.props.getHero(heroId);
    this.props.history.push(`/track/${heroId}/stats`);
  };

  /**
   * @name onModalClosed
   * @description close modal
   */
  onModalClosed = () => {
    this.setState({ heroId: null, showModal: false });
  };

  /**
   * @name onModalOpened
   * @description open modal
   */
  onModalOpened = (heroId: number) => () => {
    this.setState({ heroId, showModal: true });
  };

  render() {
    const { heroes, loading } = this.props;

    let heroList: any = <Spinner />;

    if (!loading) {
      heroList = heroes.map((hero: Hero, index: number) => (
        <SecondaryCard
          btnColor={['Primary', '', 'Warn']}
          btnText={['View', '', 'Delete']}
          editing
          key={index}
          label={hero.active ? 'Active Campagin' : 'In Need of Quests'}
          onCancel={this.onModalOpened(hero.id)}
          onEdit={this.onHeroSelection(hero.id)}
          wide
        >
          <Input label='Hero' long value={hero.name} />

          <Input
            label={'Class & Level'}
            long
            value={hero.heroClass + ' ' + hero.level}
          />

          <Input label='Race' long value={hero.race} />
        </SecondaryCard>
      ));
    }

    if (!loading && heroes.length === 0) {
      heroList = <p>You have not created any heroes yet!</p>;
    }

    return (
      <>
        <Modal
          color='Warn'
          onClose={this.onModalClosed}
          show={this.state.showModal}
          title='Delete Hero?'
        >
          <p>
            Are you sure you want to delete this hero? This cannot be undone.
          </p>

          <div className={classes.FullWidth}>
            <Button btnType='Raised' color='Warn' clicked={this.onModalClosed}>
              Cancel
            </Button>

            <Button
              btnType='Flat'
              color='Primary'
              clicked={this.onHeroDeletion}
            >
              Yes
            </Button>
          </div>
        </Modal>

        <TitleCard subTitle='Keep tabs on all your heroes' title='Track'>
          {heroList}
        </TitleCard>
      </>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  heroes: state.hero.heroes,
  loading: state.hero.loading,
  user: state.auth.user
});

const mapDispatchToProps = (dispatch: Dispatch<HeroActionTypes>) => ({
  deleteHero: (heroId: number, uid: string) =>
    dispatch(deleteHero(heroId, uid)),
  fetchHeroes: (uid: string) => dispatch(fetchHeroes(uid)),
  getHero: (heroId: number) => dispatch(getHero(heroId))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Track)
);
