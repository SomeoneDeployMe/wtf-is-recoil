import React, {FC} from 'react';
import {useRecoilValue} from 'recoil';
import {backdropColor} from '../../../state/documentState';
import styled from '@emotion/styled';

export const DocumentBackdrop: FC = () => {
  const color = useRecoilValue(backdropColor);

  return <BackdropColor color={color} />;
};

const BackdropColor = styled.div<{color: string;}>`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: ${({color}) => color};
`;
