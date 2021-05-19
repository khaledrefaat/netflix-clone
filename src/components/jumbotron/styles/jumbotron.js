import styled from 'styled-components/macro';

const bp950 = 59.375;
const bp600 = 37.5;

export const Item = styled.div`
  display: flex;
  border-bottom: 0.8rem solid #222;
  padding: 5rem 5%;
  color: white;
  overflow: hidden;

  @media only screen and (min-width: ${bp950}em) {
    flex-direction: ${({ direction }) => direction};
  }
`;

export const Inner = styled.div`
  display: flex;
  justify-content: space-btween;
  align-items: center;
  flex-direction: column;
  margin: auto;
  width: 100%;
  max-width: 110rem;

  @media only screen and (min-width: ${bp950}em) {
    flex-direction: ${({ direction }) => direction};
  }
`;

export const Container = styled.div`
  @media only screen and (min-width: ${bp950}em) {
    ${Item}:last-of-type h2 {
      margin-bottom: 5rem;
    }
  }
`;

export const Pane = styled.div`
  width: 100%;
  padding: 4.5rem;
  text-align: center;

  @media only screen and (min-width: ${bp950}em) {
    width: 50%;
    padding: 0;
  }
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: normal;
  line-height: normal;

  // 600px
  @media only screen and (min-width: ${bp600}em) {
    font-size: 5rem;
  }
`;

export const SubTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: normal;
  line-height: normal;

  // 600px
  @media only screen and (min-width: ${bp600}em) {
    font-size: 2.6rem;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;
