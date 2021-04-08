import React, {FC, useEffect, useState} from 'react';
import {LeftSidebar, RightSidebar} from './sidebars';
import {Document} from './document';
import {Flex} from '@chakra-ui/react';
import {useRecoilValue} from 'recoil';
import {documentItemIds} from '../../state/documentState';
import {DocumentItem} from './document-items';

export const DrawToolPage: FC = () => {
  const itemIds = useRecoilValue<string[]>(documentItemIds);
  const [isMinimized, setMinimized] = useState<boolean>(true);

  useEffect(() => {
    const currUrl = window.location.href;
    const url = new URL(currUrl);
    const minimizedParam = url.searchParams.get('minimized');

    setMinimized(minimizedParam === String(true));
  }, []);

  return (
    <Flex direction="row">
      <LeftSidebar minimized={isMinimized} />

      <Document>
        {itemIds.map((id) => (
          <DocumentItem key={id} itemId={id} />
        ))}
      </Document>

      {!isMinimized && (
        <RightSidebar/>
      )}
    </Flex>
  );
};
