import React from 'react';
import Jumbotron from '../components/jumbotron';
import jumboData from '../fixtures/jumbo.json';

const JumbotronContainer = () => {
  return (
    <Jumbotron.Container>
      {jumboData.map(
        ({ id, image, alt, title, subTitle, direction, video }) => (
          <Jumbotron key={id} direction={direction}>
            <Jumbotron.Pane>
              <Jumbotron.Title>{title}</Jumbotron.Title>
              <Jumbotron.SubTitle>{subTitle}</Jumbotron.SubTitle>
            </Jumbotron.Pane>
            <Jumbotron.Pane>
              <Jumbotron.Image src={image} alt={alt} />
              {video ? (
                <Jumbotron.VideoContainer>
                  <Jumbotron.Video autoPlay playSinline muted loop>
                    <source src={video} type="video/mp4" />
                  </Jumbotron.Video>
                </Jumbotron.VideoContainer>
              ) : (
                ''
              )}
            </Jumbotron.Pane>
          </Jumbotron>
        )
      )}
    </Jumbotron.Container>
  );
};
export default JumbotronContainer;
