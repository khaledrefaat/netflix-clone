import React from 'react';
import {
  Item,
  Inner,
  Container,
  Pane,
  Title,
  SubTitle,
  Image,
  VideoContainer,
  Video,
} from './styles/jumbotron';

const Jumbotron = ({ children, direction = 'row', ...restProps }) => {
  return (
    <Item {...restProps}>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
};

Jumbotron.Container = function jumbotronContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Jumbotron.Pane = function jumbotronPane({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>;
};

Jumbotron.Title = function jumbotronTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Jumbotron.SubTitle = function jumbotronSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Jumbotron.Image = function jumbotronImage({ children, ...restProps }) {
  return <Image {...restProps} />;
};

Jumbotron.VideoContainer = function jumbotronVideoContainer({
  children,
  ...restProps
}) {
  return <VideoContainer {...restProps}>{children}</VideoContainer>;
};

Jumbotron.Video = function jumbotronVideo({ children, ...restProps }) {
  return (
    <Video {...restProps}>
      {children}
    </Video>
  );
};

export default Jumbotron;
