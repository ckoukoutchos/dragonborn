import React from 'react';

import classes from './Layout.module.css';
import NavBar from '../../components/nav-bar/NavBar';

const layout = props => {
  return (
    <>
      <NavBar />
      <main className={classes.Layout}>{props.children}</main>
    </>
  );
};

export default layout;
