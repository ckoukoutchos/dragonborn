import React, { Component, Dispatch, ChangeEvent } from 'react';
import { connect } from 'react-redux';

import { AppState } from '../../../store/rootReducer';
import { AuthActionTypes } from '../../../store/auth/authActionTypes';
import { updateObject } from '../../../shared/immutable';

import Button from '../../../components/button/Button';
import Input from '../../../components/input/Input';
import Spinner from '../../../components/spinner/Spinner';
import TitleCard from '../../../components/card/title-card/TitleCard';
import SecondaryCard from '../../../components/card/secondary-card/SecondaryCard';

class Profile extends Component<any, any> {
  state = {
    editing: {
      displayName: false,
      email: false,
      password: false
    },
    displayName: this.props.user.displayName || '',
    email: this.props.user.email,
    password: '',
    passwordCheck: '',
    updated: false
  };

  onEditToggled = (section: string) => () => {
    this.setState((prevState: any) => {
      const updatedValue = updateObject(prevState.editing, {
        [section]: !prevState.editing[section]
      });

      if (prevState.updated) {
      }
      return { editing: updatedValue, updated: false };
    });
  };

  onInputChange = (label: string) => (evt: ChangeEvent<HTMLInputElement>) => {
    this.setState({ [label]: evt.target.value, updated: true });
  };

  saveUpdatedSection = (section: string) => {
    switch (section) {
      case 'displayName':

      case 'email':

      case 'password':

      default:
        return;
    }
  };

  render() {
    const { error, loading, user } = this.props;
    const { editing, displayName, email, password, passwordCheck } = this.state;

    let profile = <Spinner />;

    if (!loading) {
      profile = (
        <TitleCard title="Profile" readOnly>
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

    return profile;
  }
}

const mapStateToProps = (state: AppState) => ({
  error: state.auth.error,
  loading: state.auth.loading,
  user: state.auth.user
});

const mapDispatchToProps = (dispatch: Dispatch<AuthActionTypes>) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
