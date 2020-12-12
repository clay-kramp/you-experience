import React from 'react';
import './idleButton.scss';

class IdleButton extends React.Component {
  render() {
    return (
      <div>
        ye dat me
        <div className='btn btn-idle'>
          MEEE
          <span>{this.props.title}</span>
        </div>
      </div>
    );
  }
}

export default IdleButton;
