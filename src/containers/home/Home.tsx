import React, { Component } from 'react';

class Home extends Component<any> {
  signup = () => {
    console.log(this.props.history);
    this.props.history.push('/signup');
  };

  render() {
    return (
      <>
        <h1>Home Page</h1>
        <button onClick={this.signup}>Signup</button>
      </>
    );
  }
}

export default Home;
