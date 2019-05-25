// library
import React, { Component, ChangeEvent } from 'react';
import { Dispatch } from 'redux';
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
import { User } from '../../../models/User';

interface ProfileProps {
  error: any;
  loading: boolean;
  user: User | null;
  deleteUser: () => AuthActionTypes;
  updateDisplayName: (displayName: string) => AuthActionTypes;
  updateEmail: (email: string) => AuthActionTypes;
  updatePassword: (password: string) => AuthActionTypes;
}

interface ProfileState {
  editing: {
    displayName: boolean;
    email: boolean;
    password: boolean;
    [key: string]: any;
  };
  displayName: string;
  error: any;
  email: string;
  password: string;
  passwordCheck: string;
  showModal: boolean;
  updated: boolean;
}

/*
 * Profile container widget
 */
class Profile extends Component<ProfileProps, ProfileState> {
  state = {
    editing: {
      displayName: false,
      email: false,
      password: false
    },
    displayName: this.props.user ? this.props.user.displayName : '',
    error: null,
    email: this.props.user ? this.props.user.email : '',
    password: '',
    passwordCheck: '',
    showModal: false,
    updated: false
  };

  /**
   * @name onCancelClicked
   * @description on cancel clicked, sets editing to false for section and updated to false
   * @param section string
   */
  onCancelClicked = (section: string) => () => {
    this.setState((prevState: ProfileState) => {
      const updatedValue = updateObject(prevState.editing, {
        [section]: !prevState.editing[section]
      });
      return { editing: updatedValue, updated: false };
    });
  };

  /**
   * @name onDeleteClicked
   * @description on delete clicked dispatches action to delete user
   */
  onDeleteClicked = () => this.props.deleteUser();

  /**
   * @name onEditToggled
   * @description on edit clicked, toggles section edit status, sets updated to false and if a field was updated, saves it
   * @parm section string
   */
  onEditToggled = (section: string) => () => {
    this.setState((prevState: ProfileState) => {
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

  /**
   * @name onModalToggled
   * @description toggles modal show status
   */
  onModalToggled = () => {
    this.setState((prevState: ProfileState) => ({
      showModal: !prevState.showModal
    }));
  };

  /**
   * @name onInputChange
   * @description updates the value of a field on change
   * @param label string
   */
  onInputChange = (label: string) => (evt: ChangeEvent<HTMLInputElement>) => {
    // ts-bug requires this.state to prevent error with string lteral type
    this.setState({ ...this.state, [label]: evt.target.value, updated: true });
  };

  /**
   * @name saveUpdatedSection
   * @description based on section passed in, will validate and dispatch action to save
   * @param section string
   * @param prevState ProfileState
   */
  saveUpdatedSection = (section: string, prevState: ProfileState) => {
    switch (section) {
      case 'displayName':
        this.props.updateDisplayName(prevState.displayName);
        return;
      case 'email':
        if (validEmail(prevState.email)) {
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
      passwordCheck,
      showModal
    } = this.state;

    let profile = <Spinner />;

    if (!loading) {
      profile = (
        <TitleCard
          btnColor={['Warn', 'Warn']}
          btnText={['Delete', 'Delete']}
          editing={false}
          onEdit={this.onModalToggled}
          title='Profile'
        >
          {error ? <p className={classes.Error}>{error}</p> : null}

          <SecondaryCard
            label='Display Name'
            editing={editing.displayName}
            onCancel={this.onCancelClicked('displayName')}
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
            label='Email Address'
            editing={editing.email}
            onCancel={this.onCancelClicked('email')}
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
            label='Reset Password'
            editing={editing.password}
            onCancel={this.onCancelClicked('password')}
            onEdit={this.onEditToggled('password')}
            wide
          >
            <Input
              editing={editing.password}
              onChange={this.onInputChange('password')}
              label='New Password'
              long
              type='password'
              value={password}
            />

            <Input
              editing={editing.password}
              onChange={this.onInputChange('passwordCheck')}
              label='Re-type'
              long
              type='password'
              value={passwordCheck}
            />
          </SecondaryCard>
        </TitleCard>
      );
    }

    return (
      <>
        <Modal
          color='Warn'
          onClose={this.onModalToggled}
          show={showModal}
          title='Delete Account?'
        >
          <p>
            Are you sure you want to delete your account? This cannot be undone.
          </p>

          <div>
            <Button
              btnType='Raised'
              color='Warn'
              clicked={this.onDeleteClicked}
            >
              Yes
            </Button>

            <Button
              btnType='Flat'
              color='Primary'
              clicked={this.onModalToggled}
            >
              No
            </Button>
          </div>
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
