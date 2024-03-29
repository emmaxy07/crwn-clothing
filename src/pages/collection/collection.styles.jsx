import styled from 'styled-components';

export const CollectionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CollectionTitle = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;
`;

export const CollectionItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px;
  & > div {
    margin-bottom: 30px;
  }

  @media only screen and (max-width: 800px){
  grid-template-columns: 1fr 1fr;
  }

  @media only screen and (max-width: 600px){
  grid-template-columns: 1fr;
  }
`;