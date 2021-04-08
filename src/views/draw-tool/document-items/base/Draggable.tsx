import React, {FC, MouseEvent} from 'react';
import {DraggableCore, DraggableEvent} from 'react-draggable';

interface IDraggableProps {
  onDrag: (event: MouseEvent) => void;
}

export const Draggable: FC<IDraggableProps> = ({onDrag, children}) => {

  const handleDrag = (event: DraggableEvent) => {
    onDrag(event as MouseEvent);
  };

  return (
    <DraggableCore onDrag={handleDrag}>
      {children}
    </DraggableCore>
  )
};
