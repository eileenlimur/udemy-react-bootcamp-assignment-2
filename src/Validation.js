import React, { Component } from 'react';

class Validation extends Component {
  state = {

  }
  render () {
    let text = 'text too short';
    if (this.props.textLength > 10) {
      text = 'text too long';
    }
    return (
      //can also use ternary here
      <div>{text}</div>
    )
  }
}

export default Validation;