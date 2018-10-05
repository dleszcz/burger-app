import styled from 'styled-components';

export const BurgerContainer = styled.div `
  height: 250px;
  width: 100%;
  overflow: scroll;
  margin: auto;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;

  @media (min-width: 500px) and (min-height: 401px) {
    height: 300px;
    width: 350px;
  }

  @media (min-width: 1000px) and (min-height: 700px) {
    height: 600px;
    width: 700px;
  }
`;