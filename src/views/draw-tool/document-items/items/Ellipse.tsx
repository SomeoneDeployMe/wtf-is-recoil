import styled from '@emotion/styled';
import {IShapeStyledProps} from '../../../../models';

export const Ellipse = styled.div<IShapeStyledProps>`
  width: ${({width}) => width}px;
  height: ${({height}) => height}px;
  border: 2px solid #000;
  border-radius: ${({width}) => width}px / ${({height}) => height}px;
  background-color: #f1f1f1;

  ${({isSelected}) => isSelected && `
    border: 2px dashed #2f45e2;
  `}
`;
