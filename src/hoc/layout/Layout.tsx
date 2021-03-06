import React from 'react';
import classes from './Layout.module.css';
import Footer from '../../components/footer/Footer';
import NavBar from '../../components/nav-bar/NavBar';

interface Props {
  children: any;
}

// TODO: move into component folder
const layout = (props: Props) => {
  return (
    <>
      <NavBar />
      <main className={classes.Layout}>{props.children}</main>
      <Footer />
    </>
  );
};

export default layout;
