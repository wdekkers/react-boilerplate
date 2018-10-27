import React from 'react';

export default class Newsletter extends React.Component {
  handleClick = e => {
    e.preventDefault();
  };
  render() {
    return (
      <div className="temp">
        <h3>Signup for our newsletter</h3>
        <form method="post" action="">
          <input type="text" name="email" placeholder="emailAddress" />
          <button onClick={this.handleClick}>Sign up</button>
        </form>
      </div>
    );
  }
}
