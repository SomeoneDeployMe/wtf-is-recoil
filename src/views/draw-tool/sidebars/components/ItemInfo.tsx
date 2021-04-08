import {FormControl, FormLabel, Text} from '@chakra-ui/react';
import React, {FC} from 'react';
import {useRecoilValue} from 'recoil';
import {documentItemState} from '../../../../state/documentItemsState';

interface IItemInfoProps {
  shapeId: string;
}

export const ItemInfo: FC<IItemInfoProps> = ({shapeId}) => {
  const shape = useRecoilValue(documentItemState(shapeId));

  return (
    <FormControl>
      <FormLabel fontSize="sm" color="#fff">{shape.id}</FormLabel>
      <Text fontSize="sm" color="#fff" textAlign="left">{`w: ${shape.dimensions.width}, h: ${shape.dimensions.height}, x: ${shape.dimensions.left}, y: ${shape.dimensions.top}`}</Text>
    </FormControl>
  );
};
