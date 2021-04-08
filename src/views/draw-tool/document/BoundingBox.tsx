import React, {FC} from 'react';
import styled from '@emotion/styled';
import {useRecoilValue} from 'recoil';
import {boundingBoxSizeSelector, selectedDocumentItems} from '../../../state/documentItemsState';

export const BoundingBox: FC = () => {
  const selected = useRecoilValue(selectedDocumentItems);
  const boundingBoxSize = useRecoilValue(boundingBoxSizeSelector);

  return (
    selected.length > 1 ? (
      <Selection style={boundingBoxSize} />
    ) : null
  );
};

const Selection = styled.div`
  position: absolute;
  z-index: 1;
  border: 1px dashed #acacad;
`;
