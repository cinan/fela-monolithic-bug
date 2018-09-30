import React, { Component } from 'react';
import { Provider, FelaComponent } from 'react-fela';
import configureFela from './configureFela';

class App extends Component {
  render() {
    return (
      <Provider renderer={configureFela()}>
        <FelaComponent style={{ color: 'red' }}>
          I am red.
        </FelaComponent>
      </Provider>
    );
  }
}

export default App;
