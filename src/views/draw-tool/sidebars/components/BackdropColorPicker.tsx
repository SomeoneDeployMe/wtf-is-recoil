import {Popover, PopoverBody, PopoverContent, PopoverTrigger} from '@chakra-ui/react';
import React, {FC} from 'react';
import {ColorResult, SketchPicker} from 'react-color';
import {ColorSwatch} from './ColorSwatch';
import {useRecoilState} from 'recoil';
import {backdropColor} from '../../../../state/documentState';

export const BackdropColorPicker: FC = () => {
  const [color, setColor] = useRecoilState(backdropColor);

  const handleChange = (newColor: ColorResult) => setColor(newColor.hex);

  return (
    <>
      <Popover isLazy placement="left-start">
        <PopoverTrigger>
          <ColorSwatch color={color} />
        </PopoverTrigger>

        <PopoverContent w={220}>
          <PopoverBody p={0}>
            <SketchPicker color={color} onChange={handleChange} />
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
};
