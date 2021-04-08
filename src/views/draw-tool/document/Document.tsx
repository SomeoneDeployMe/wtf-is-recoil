import {Flex} from '@chakra-ui/react';
import React, {FC} from 'react';
import {useSetRecoilState} from 'recoil';
import {selectedDocumentItems} from '../../../state/documentItemsState';
import {BoundingBox} from './BoundingBox';
import {DocumentBackdrop} from './DocumentBackdrop';

export const Document: FC = ({children}) => {
  const setSelectedItemIds = useSetRecoilState(selectedDocumentItems);

  const handleAnyItemUnselect = () => {
    setSelectedItemIds([]);
  }

  return (
    <Flex flexGrow={1} onClick={handleAnyItemUnselect} position="relative">
      <DocumentBackdrop />

      <BoundingBox />

      {children}
    </Flex>
  );
};
