import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './components/App';

const renderApp = AppView => {
  render(
    <AppContainer>
      <AppView />
    </AppContainer>,
    document.getElementById('app')
  );
}

renderApp(App);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const HotAppView = require('./components/App').default;
    renderApp(HotAppView);
  });
}
