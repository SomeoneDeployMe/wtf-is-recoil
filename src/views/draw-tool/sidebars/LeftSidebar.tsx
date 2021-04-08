import React, {FC} from 'react';
import {useRecoilValue} from 'recoil';
import {StackDivider, VStack} from '@chakra-ui/react';
import {DocumentItemsToolbar, ItemInfo, Sidebar, TimeTravelToolbar} from './components';
import {documentItemIds} from '../../../state/documentState';
import styled from '@emotion/styled';

interface ILeftSidebarProps {
  minimized: boolean;
}

export const LeftSidebar: FC<ILeftSidebarProps> = ({minimized}) => {
  const itemIds = useRecoilValue(documentItemIds);

  return (minimized ? (
      <FixedPanel>
        <DocumentItemsToolbar/>
      </FixedPanel>
    ) : (
      <Sidebar>
        <VStack align="left">
          <DocumentItemsToolbar/>

          <TimeTravelToolbar/>

          <VStack divider={<StackDivider/>} spacing={2}>
            {itemIds.map((id) => (
              <ItemInfo key={id} shapeId={id}/>
            ))}
          </VStack>
        </VStack>
      </Sidebar>
    )
  );
};

const FixedPanel = styled.div`
  position: fixed;
  top: 16px;
  left: 16px;
  background-color: #4a495d;
  z-index: 1;
  padding: 16px;
  border-radius: 4px;
`;
