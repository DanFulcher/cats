import React from 'react';
import styled from 'styled-components';
import ClipLoader from 'react-spinners/ClipLoader';
import { colours } from '../../styles';

const LoadingCont = styled.section`
  text-align: center;
`;

const Loading = () => (
  <LoadingCont>
    <ClipLoader
      size={150}
      color={colours.primary}
    />
  </LoadingCont>
);

export default Loading;
