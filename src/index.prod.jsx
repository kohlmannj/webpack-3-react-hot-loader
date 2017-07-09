import React from 'react';
import { render } from 'react-dom';
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
