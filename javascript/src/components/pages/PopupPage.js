import React, {Component} from 'react';

export default class Popup extends Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h1 className='rule2'>{this.props.text}</h1>
        <button onClick={this.props.closePopup} className='button4'>Fermer</button>
        </div>
      </div>
    );
  }
}

