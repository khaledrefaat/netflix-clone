import React from 'react';
import JumbotronContainer from './containers/jumbotron';
import FooterContainer from './containers/footer';
import FaqsContainer from './containers/faqs';

export const App = () => {
  return (
    <div className="App">
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </div>
  );
};

export default App;
