import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
const bp1000 = 62.5;

export const Container = styled.footer`
  display: flex;
  margin: auto;
  max-width: 1000px;
  flex-direction: column;
  padding: 70px 30px;
  @media only screen and (min-width: ${bp1000}em) {
    padding: 70px 0;
  }
`;
export const Row = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  @media only screen and (min-width: ${bp1000}em) {
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  }
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;
export const LinkContainer = styled.a`
  color: #757575;
  margin-bottom: 20px;
  font-size: 14px;
  text-decoration: none;
  transition: color 0.3s ease-out;

  &:hover {
    color: #989898;
  }
`;
export const Title = styled.p`
  font-size: 16px;
  color: #757575;
  margin-bottom: 40px;
`;
export const Text = styled.p`
  font-size: 13px;
  color: #757575;
  margin-bottom: 40px;
`;
export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;
