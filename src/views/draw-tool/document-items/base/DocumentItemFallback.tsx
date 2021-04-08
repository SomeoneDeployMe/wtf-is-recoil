import {Spinner} from '@chakra-ui/react';
import React, {FC} from 'react';
import styled from '@emotion/styled';

export const DocumentItemFallback: FC = () => (
  <Container>
    <Spinner
      thickness="3px"
      speed="0.65s"
      emptyColor="gray.200"
      color="#4a495d"
      size="lg"
    />
  </Container>
);

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px 0;
  border: 1px solid #dcdcdc;
`;
