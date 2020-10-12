import React, {Component} from 'react';
import './Char.css';

class Char extends Component {
  
  render () {
    return (
      <div className='char-component' onClick={this.props.click}>{this.props.children}</div>
    )
  }
}

export default Char;