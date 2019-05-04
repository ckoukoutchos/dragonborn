import React, { Component } from 'react';

// class SignUpForm extends Component<any, any> {
//   state = {
//     username: '',
//     email: '',
//     passwordOne: '',
//     passwordTwo: '',
//     error: null
//   };

//   onChange = (evt: any) => {
//     this.setState({ [evt.target.name]: evt.target.value });
//   };

//   onSubmit = (evt: any) => {
//     const { username, email, passwordOne } = this.state;

//     this.props.firebase
//       .createUserWithEmailAndPassword(email, passwordOne)
//       .then((authUser: any) => {
//         this.setState(this.state);
//       })
//       .catch((error: any) => {
//         this.setState({ error });
//       });

//     evt.preventDefault();
//   };

//   render() {
//     const { username, email, passwordOne, passwordTwo, error } = this.state;

//     const isInvalid =
//       passwordOne !== passwordTwo ||
//       passwordOne === '' ||
//       email === '' ||
//       username === '';

//     return (
//       <form onSubmit={this.onSubmit}>
//         <input
//           name="username"
//           value={username}
//           onChange={this.onChange}
//           type="text"
//           placeholder="Username"
//         />
//         <input
//           name="email"
//           value={email}
//           onChange={this.onChange}
//           type="text"
//           placeholder="Email"
//         />
//         <input
//           name="passwordOne"
//           value={passwordOne}
//           onChange={this.onChange}
//           type="password"
//           placeholder="Password"
//         />
//         <input
//           name="passwordTwo"
//           value={passwordTwo}
//           onChange={this.onChange}
//           type="password"
//           placeholder="Confirm Password"
//         />
//         <button disabled={isInvalid} type="submit">
//           Sign Up
//         </button>

//         {error && <p>{error.message}</p>}
//       </form>
//     );
//   }
// }
