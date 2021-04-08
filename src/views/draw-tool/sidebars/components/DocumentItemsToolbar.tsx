import React, {FC} from 'react';
import {Button, HStack} from '@chakra-ui/react';
import {FiCircle, FiImage, FiSquare} from 'react-icons/all';
import {useInsertItem} from '../hooks';
import {EDocumentItemType} from '../../../../models';

export const DocumentItemsToolbar: FC = () => {
  const handleInsertItem = useInsertItem();

  const handleInsertRectangle = () => handleInsertItem(EDocumentItemType.RECTANGLE);
  const handleInsertEllipse = () => handleInsertItem(EDocumentItemType.ELLIPSE);
  const handleInsertImage = () => handleInsertItem(EDocumentItemType.IMAGE);

  return (
    <HStack>
      <Button onClick={handleInsertRectangle}>
        <FiSquare size={24}/>
      </Button>

      <Button onClick={handleInsertEllipse}>
        <FiCircle size={24}/>
      </Button>

      <Button onClick={handleInsertImage}>
        <FiImage size={24}/>
      </Button>
    </HStack>
  );
};
