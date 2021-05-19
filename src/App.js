import React from 'react';
import JumbotronContainer from './containers/jumbotron';
import FooterContainer from './containers/footer';

export const App = () => {
  return (
    <div className="App">
      <JumbotronContainer />
      <FooterContainer />
    </div>
  );
};

export default App;
