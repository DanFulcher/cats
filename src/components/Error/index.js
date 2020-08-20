import React from 'react';
import styled from 'styled-components';

import Button from '../Button';
import useCats from '../../hooks/useCats';

const ErrorCont = styled.section`
  text-align: center;
`;
const ButtonCont = styled.div`
  width: 400px;
  margin: 0 auto;
`;
const Error = () => {
  const { getCats } = useCats();
  return (
    <ErrorCont>
      <h1>There has been an error</h1>
      <ButtonCont>
        <Button text="Try again" onPress={() => getCats()} />
      </ButtonCont>
    </ErrorCont>
  );
};

export default Error;
