import styled from '@emotion/styled';
import {IShapeStyledProps} from '../../../../models';

export const Rectangle = styled.div<IShapeStyledProps>`
  width: ${({width}) => width}px;
  height: ${({height}) => height}px;
  border-radius: 4px;
  border: 2px solid #282c34;
  background-color: #f1f1f1;
  
  ${({isSelected}) => isSelected && `
    border: 2px dashed #2f45e2;
  `}
`;
