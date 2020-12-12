import React from 'react';
import './button.scss';

class Button extends React.Component {
  render() {
    return (
      <button class="btn draw-border">{this.props.title}</button>
    );
  }
}

export default Button;
