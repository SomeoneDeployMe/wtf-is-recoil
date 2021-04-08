import React, {cloneElement, FC, FunctionComponentElement, MouseEvent, Suspense} from 'react';
import styled from '@emotion/styled';
import {useRecoilState} from 'recoil';
import {documentItemWithId, selectedDocumentItems} from '../../../../state/documentItemsState';
import {ResizeCallbackData} from 'react-resizable';
import {Resizable} from './Resizable';
import {Draggable} from './Draggable';
import {IShapeStyledProps, TDocumentItem} from '../../../../models';
import {DocumentItemFallback} from './DocumentItemFallback';

interface IShapeContainerProps {
  shapeId: string;
  children: FunctionComponentElement<IShapeStyledProps>;
}

export const DocumentItemContainer: FC<IShapeContainerProps> = ({shapeId, children}) => {
  const [documentItem, setDocumentItem] = useRecoilState<TDocumentItem>(documentItemWithId(shapeId));
  const [selectedIds, setSelectedIds] = useRecoilState(selectedDocumentItems);
  const isSelected = selectedIds.includes(shapeId);

  const handleResize = (data: ResizeCallbackData) => {
    setDocumentItem((prev) => ({
      ...prev,
      dimensions: {
        ...prev.dimensions,
        width: data.size.width,
        height: data.size.height,
      },
    }));
  };

  const handleDrag = (event: MouseEvent) => {
    setDocumentItem((prev) => ({
      ...prev,
      dimensions: {
        ...prev.dimensions,
        left: prev.dimensions.left + event.movementX,
        top: prev.dimensions.top + event.movementY,
      }
    }));
  };

  const handleSelect = (event: MouseEvent) => {
    if (selectedIds.includes(shapeId)) {
      return;
    }

    if (event.shiftKey) {
      setSelectedIds((prev) => [...prev, shapeId]);
    } else {
      setSelectedIds([shapeId]);
    }
  };

  const handleStopClickPropagation = (event: MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <Container
      style={{
        width: documentItem?.dimensions?.width,
        height: documentItem?.dimensions?.height,
        top: documentItem?.dimensions?.top,
        left: documentItem?.dimensions?.left
      }}
      onMouseDown={handleSelect}
      onClick={handleStopClickPropagation}
    >
      <Resizable width={documentItem?.dimensions?.width} height={documentItem?.dimensions?.height}
                 isSelected={isSelected} onResize={handleResize}>
        <Draggable onDrag={handleDrag}>
          <div>
            <Suspense fallback={<DocumentItemFallback/>}>
              {cloneElement<IShapeStyledProps>(children, {
                width: documentItem?.dimensions?.width,
                height: documentItem?.dimensions?.height,
                isSelected,
              })}
            </Suspense>
          </div>
        </Draggable>
      </Resizable>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  z-index: 10;
`;
