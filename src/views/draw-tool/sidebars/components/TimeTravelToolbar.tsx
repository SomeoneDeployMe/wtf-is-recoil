import { Button, HStack } from '@chakra-ui/react';
import React, {FC} from 'react';
import {useTimeTravel} from '../hooks';
import {FiRewind, FiSave} from 'react-icons/all';

export const TimeTravelToolbar: FC = () => {
  const {save, restore, hasSavedSnapshot} = useTimeTravel();

  return (
    <HStack>
      <Button onClick={save} leftIcon={<FiSave/>}>Save</Button>
      {hasSavedSnapshot && <Button onClick={restore} leftIcon={<FiRewind />}>Restore</Button>}
    </HStack>
  )
}
