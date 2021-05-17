import React from 'react';
import Jumbotron from './components/jumbotron';
import jumboData from './fixtures/jumbo.json';

const App = () => {
  return (
    <div className="App">
      <Jumbotron.Container>
        {jumboData.map(({ id, image, alt, title, subTitle, direction }) => (
          <Jumbotron key={id} direction={direction}>
            <Jumbotron.Pane>
              <Jumbotron.Title>{title}</Jumbotron.Title>
              <Jumbotron.SubTitle>{subTitle}</Jumbotron.SubTitle>
            </Jumbotron.Pane>
            <Jumbotron.Pane>
              <Jumbotron.Image src={image} alt={alt} />
            </Jumbotron.Pane>
          </Jumbotron>
        ))}
      </Jumbotron.Container>
    </div>
  );
};

export default App;
