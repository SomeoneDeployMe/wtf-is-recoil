import React, {FC} from 'react';
import styled from '@emotion/styled';

interface IColorSwatchStyleProps {
  color: string;
}

interface IColorSwatchProps extends IColorSwatchStyleProps {
  onClick?: () => void;
}

export const ColorSwatch: FC<IColorSwatchProps> = ({color, onClick}) => {
  return (
    <Container onClick={onClick}>
      <Color color={color} />
    </Container>
  )
}

const Color = styled.div<IColorSwatchStyleProps>`
  width: 18px;
  height: 18px;
  border-radius: 9px;
  background-color: ${({color}) => color};
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 12px;
  border: 1px solid #000;
  background-color: #fff;
  cursor: pointer;
`;
