import React, { Component } from 'react';
import './App.css';

import background from './assets/images/street-art-background.png';
import mask from './assets/images/logo-mask.png';
import mask_flipped from './assets/images/logo-mask-flipped.png';
import logo_background from './assets/images/logo-background.png';

class App extends Component {
  state = {
    maskHeight: '100vh'
  }

  render() {
    return (
      <div className="App">
        <div className="container">
        </div>
        <div className="image-container">
          <div className="overlay">
            {/* <img className="mask" src={mask} /> */}
            <img className="mask" src={mask_flipped} />
          </div>
            <img className="background" src={background} />
        </div>
      </div>
    );
  }
}

export default App;
