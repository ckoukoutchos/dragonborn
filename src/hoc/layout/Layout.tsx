// library
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

// store
import { AppState } from '../../store/rootReducer';
import {
  SessionActionTypes,
  httpErrorReset
} from '../../store/session/session';

// components
import Button from '../../components/button/Button';
import classes from './Layout.module.css';
import Footer from '../../components/footer/Footer';
import Modal from '../../components/modal/Modal';
import NavBar from '../../components/nav-bar/NavBar';

interface LayoutProps {
  children: any;
  httpError: boolean;
  httpErrorReset: () => SessionActionTypes;
}

// TODO: move into container folder
class Layout extends Component<LayoutProps> {
  render() {
    const { children, httpError, httpErrorReset } = this.props;

    return (
      <>
        <NavBar />
        <main className={classes.Layout}>{children}</main>
        <Footer />
        <Modal
          color='Warn'
          onClose={httpErrorReset}
          show={httpError}
          title='Oops, something went wrong!'
        >
          <p>An error occured, please try again.</p>

          <div>
            <Button btnType='Flat' color='Primary' clicked={httpErrorReset}>
              Ok
            </Button>
          </div>
        </Modal>
      </>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  httpError: state.session.httpError
});

const mapDispatchToProps = (dispatch: Dispatch<SessionActionTypes>) => ({
  httpErrorReset: () => dispatch(httpErrorReset())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
