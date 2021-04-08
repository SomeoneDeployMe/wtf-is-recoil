import React, {FC} from 'react';
import {
  FormControl,
  FormLabel, NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper, SimpleGrid
} from '@chakra-ui/react';
import {useRecoilState, useRecoilValue} from 'recoil';
import {IDimensions} from '../../../../models';
import {documentItemWithId, selectedDocumentItems} from '../../../../state/documentItemsState';

export const ItemEditor: FC = () => {
  const selectedIds = useRecoilValue(selectedDocumentItems);
  const [selectedItem, setSelectedItem] = useRecoilState(documentItemWithId(selectedIds[0]));

  const handleChange = (propName: keyof IDimensions) => (_valueAsString: string, valueAsNumber: number) => {
    setSelectedItem((prev) => ({
      ...prev,
      dimensions: {
        ...prev.dimensions,
        [propName]: valueAsNumber,
      },
    }));
  };

  return (
    selectedIds.length === 1 ? (
      <SimpleGrid columns={2} spacing={10}>
        <FormControl>
          <FormLabel color="#fff">Width:</FormLabel>
          <NumberInput
            value={selectedItem?.dimensions?.width}
            step={1}
            allowMouseWheel
            onChange={handleChange('width')}
          >
            <NumberInputField bgColor="#fff" />
            <NumberInputStepper>
              <NumberIncrementStepper/>
              <NumberDecrementStepper/>
            </NumberInputStepper>
          </NumberInput>
        </FormControl>

        <FormControl>
          <FormLabel color="#fff">Height:</FormLabel>
          <NumberInput
            value={selectedItem?.dimensions?.height}
            step={1}
            allowMouseWheel
            onChange={handleChange('height')}
          >
            <NumberInputField bgColor="#fff" />
            <NumberInputStepper>
              <NumberIncrementStepper/>
              <NumberDecrementStepper/>
            </NumberInputStepper>
          </NumberInput>
        </FormControl>

        <FormControl>
          <FormLabel color="#fff">X:</FormLabel>
          <NumberInput
            value={selectedItem?.dimensions?.left}
            step={1}
            allowMouseWheel
            onChange={handleChange('left')}
          >
            <NumberInputField bgColor="#fff" />
            <NumberInputStepper>
              <NumberIncrementStepper/>
              <NumberDecrementStepper/>
            </NumberInputStepper>
          </NumberInput>
        </FormControl>

        <FormControl>
          <FormLabel color="#fff">Y:</FormLabel>
          <NumberInput
            value={selectedItem?.dimensions?.top}
            step={1}
            allowMouseWheel
            onChange={handleChange('top')}
          >
            <NumberInputField bgColor="#fff" />
            <NumberInputStepper>
              <NumberIncrementStepper/>
              <NumberDecrementStepper/>
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
      </SimpleGrid>
    ) : null
  );
};
