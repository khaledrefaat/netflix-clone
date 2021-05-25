import styled from 'styled-components/macro';

const bp600 = 37.5;

export const Container = styled.div`
  display: flex;
  border-bottom: 0.8rem solid #222;
`;

export const Frame = styled.div``;

export const Inner = styled.div`
  display: flex;
  padding: 7rem 4.5rem;
  flex-direction: column;
  max-width: 81.5rem;
  margin: auto;
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  line-height: 1.1;
  margin-top: 0;
  margin-bottom: 0;
  color: #fff;
  text-align: center;

  // 600px
  @media only screen and (min-width: ${bp600}em) {
    font-size: 5rem;
  }
`;

export const Item = styled.div`
  color: #fff;
  margin-bottom: 1rem;

  &:first-of-type {
    margin-top: 3em;
  }
  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  font-size: 1.6remrem;

  margin-bottom: 1px;
  background-color: #303030;
  padding: 0.8em 1.2em;
  user-select: none;

  img {
    filter: brightness(0) invert(1);
    width: 1.6rem;

    @media only screen and (min-width: ${bp600}em) {
      width: 2.4rem;
    }
  }
  @media only screen and (min-width: ${bp600}em) {
    font-size: 2.6rem;
  }
`;

export const Body = styled.div`
  font-size: 16px;
  font-weight: normal;
  line-height: 22px;
  background-color: #303030;
  white-space: pre-wrap;
  user-select: none;
  overflow: hidden;
  &.closed {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
  }
  &.open {
    max-height: 1200px;
    transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
  }
  span {
    display: block;
    padding: 0.8em 2.2em 0.8em 1.2em;
  }
  @media only screen and (min-width: ${bp600}em) {
    font-size: 26px;
    line-height: normal;
  }
`;
