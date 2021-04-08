import {ResizableBox, ResizeCallbackData} from 'react-resizable';
import React, {FC, SyntheticEvent} from 'react';
import styled from '@emotion/styled';

interface IResizableProps {
  width: number;
  height: number;
  isSelected: boolean;
  onResize: (data: ResizeCallbackData) => void;
}

export const Resizable: FC<IResizableProps> = ({width, height, isSelected, children, onResize}) => {

  const handleResize = (_event: SyntheticEvent, data: ResizeCallbackData) => {
    onResize(data);
  };

  return (
    <ResizableBox
      width={width}
      height={height}
      axis="both"
      handle={<Handle isVisible={isSelected}/>}
      onResize={handleResize}
    >
      {children}
    </ResizableBox>
  );
};

const Handle = styled.span<{ isVisible: boolean; }>`
  display: ${({isVisible}) => isVisible ? `block` : `none`};
  bottom: -4px;
  right: -4px;
  cursor: se-resize;
  position: absolute;
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  padding: 0 3px 3px 0;
  background-color: #fff;
  border: 1px solid #4a495d;
  border-radius: 6px;
`;
