import React, {FC} from 'react';
import './App.css';
import {DrawToolPage} from './views/draw-tool';
import {RecoilRoot} from 'recoil';
import {ChakraProvider} from '@chakra-ui/react';

export const App: FC = () => (
  <ChakraProvider>
    <RecoilRoot>
      <DrawToolPage />
    </RecoilRoot>
  </ChakraProvider>
);
