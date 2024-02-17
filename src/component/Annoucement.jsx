import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 30px; /* Corrected typo "heigth" to "height" */
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

// Additional styled containers (if needed)
const Container1 = styled.div``;
const Container2 = styled.div``;
const Container3 = styled.div``;
const Container4 = styled.div``;

const Annoucement = () => {
  return (
    <Container>
      Super Deal! Free Shipping on Orders Over $1000
    </Container>
  );
};

export default Annoucement;
