// library
import React, { Component, Dispatch, ChangeEvent } from 'react';
import { connect } from 'react-redux';

// store
import { AppState } from '../../../store/rootReducer';
import { AuthActionTypes } from '../../../store/auth/authActionTypes';
import {
  updatePassword,
  updateDisplayName,
  updateEmail,
  deleteUser
} from '../../../store/auth/authActionCreators';

// components
import Button from '../../../components/button/Button';
import classes from './Profile.module.css';
import Input from '../../../components/input/Input';
import Modal from '../../../components/modal/Modal';
import Spinner from '../../../components/spinner/Spinner';
import SecondaryCard from '../../../components/card/secondary-card/SecondaryCard';
import TitleCard from '../../../components/card/title-card/TitleCard';

// shared
import { updateObject } from '../../../shared/immutable';
import {
  validEmail,
  passwordMatch,
  validPassword
} from '../../../shared/validation';

// TODO: error msg, func docs, comments, interfaces

class Profile extends Component<any, any> {
  state = {
    editing: {
      displayName: false,
      email: false,
      password: false
    },
    displayName: this.props.user.displayName || '',
    error: null,
    email: this.props.user.email,
    password: '',
    passwordCheck: '',
    showModal: false,
    updated: false
  };

  onDeleteClicked = () => this.props.deleteUser();

  onEditToggled = (section: string) => () => {
    this.setState((prevState: any) => {
      const updatedValue = updateObject(prevState.editing, {
        [section]: !prevState.editing[section]
      });

      let error = null;
      if (prevState.updated) {
        error = this.saveUpdatedSection(section, prevState);
      }

      return { editing: updatedValue, error, updated: false };
    });
  };

  onModalToggled = () => {
    this.setState((prevState: any) => ({ showModal: !prevState.showModal }));
  };

  onInputChange = (label: string) => (evt: ChangeEvent<HTMLInputElement>) => {
    this.setState({ [label]: evt.target.value, updated: true });
  };

  // TODO: error handling
  saveUpdatedSection = (section: string, prevState: any) => {
    switch (section) {
      case 'displayName':
        this.props.updateDisplayName(prevState.displayName);
        return;
      case 'email':
        if (validEmail(prevState.displayName)) {
          this.props.updateEmail(prevState.email);
          return;
        } else {
          return 'Please use a valid email address';
        }
      case 'password':
        if (
          passwordMatch(prevState.password, prevState.passwordCheck) &&
          validPassword(prevState.password)
        ) {
          this.props.updatePassword(prevState.password);
          return;
        } else {
          return 'Please ensure your passwords match';
        }
      default:
        return;
    }
  };

  render() {
    const { loading } = this.props;
    const {
      editing,
      error,
      displayName,
      email,
      password,
      passwordCheck
    } = this.state;

    let profile = <Spinner />;

    if (!loading) {
      profile = (
        <TitleCard editing={false} onEdit={this.onModalToggled} title="Profile">
          {error ? <p className={classes.Error}>{error}</p> : null}

          <SecondaryCard
            label="Display Name"
            editing={editing.displayName}
            onEdit={this.onEditToggled('displayName')}
            wide
          >
            <Input
              editing={editing.displayName}
              onChange={this.onInputChange('displayName')}
              long
              value={displayName}
            />
          </SecondaryCard>

          <SecondaryCard
            label="Email Address"
            editing={editing.email}
            onEdit={this.onEditToggled('email')}
            wide
          >
            <Input
              editing={editing.email}
              onChange={this.onInputChange('email')}
              long
              value={email}
            />
          </SecondaryCard>

          <SecondaryCard
            label="Reset Password"
            editing={editing.password}
            onEdit={this.onEditToggled('password')}
            wide
          >
            <Input
              editing={editing.password}
              onChange={this.onInputChange('password')}
              label="New Password"
              long
              type="password"
              value={password}
            />

            <Input
              editing={editing.password}
              onChange={this.onInputChange('passwordCheck')}
              label="Re-type"
              long
              type="password"
              value={passwordCheck}
            />
          </SecondaryCard>
        </TitleCard>
      );
    }

    return (
      <>
        <Modal
          color="Warn"
          onClose={this.onModalToggled}
          show={this.state.showModal}
          title="Delete Account"
        >
          <p>
            Are you sure you want to delete your account? This cannot be undone.
          </p>

          <Button btnType="Flat" color="Warn" clicked={this.onDeleteClicked}>
            Yes
          </Button>

          <Button btnType="Flat" color="Primary" clicked={this.onModalToggled}>
            No
          </Button>
        </Modal>

        {profile}
      </>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  error: state.auth.error,
  loading: state.auth.loading,
  user: state.auth.user
});

const mapDispatchToProps = (dispatch: Dispatch<AuthActionTypes>) => ({
  deleteUser: () => dispatch(deleteUser()),
  updateDisplayName: (displayName: string) =>
    dispatch(updateDisplayName(displayName)),
  updateEmail: (email: string) => dispatch(updateEmail(email)),
  updatePassword: (password: string) => dispatch(updatePassword(password))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
