import { Component } from "react";

export default class Switch extends Component {
  state = {
    IsLoggedIn: true
  };

  render() {
    const { IsLoggedIn } = this.state;

    const renderButton = () => {
      switch (IsLoggedIn) {
        case true:
          return <button>Logout</button>;
        case false:
          return <button>Login</button>;
        default:
          return null; 
      }
    };

    return (
      <>
        {renderButton()}
      </>
    );
  }
}
