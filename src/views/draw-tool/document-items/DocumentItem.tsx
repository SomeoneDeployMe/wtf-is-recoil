import React, {FC} from 'react';
import {DocumentItemContainer} from './base';
import {useRecoilValue} from 'recoil';
import {documentItemWithId} from '../../../state/documentItemsState';
import {EDocumentItemType} from '../../../models';
import {Rectangle, Ellipse, Image} from './items';

interface IDocumentItemProps {
  itemId: string;
}

export const DocumentItem: FC<IDocumentItemProps> = ({itemId}) => {
  const item = useRecoilValue(documentItemWithId(itemId));

  const renderItem = () => {
    switch (item.type) {
      case EDocumentItemType.ELLIPSE:
        return <Ellipse/>;
      case EDocumentItemType.IMAGE:
        return <Image itemId={item.id}/>;
      default:
        return <Rectangle/>;
    }
  };

  return (
    <DocumentItemContainer shapeId={itemId}>
      {renderItem()}
    </DocumentItemContainer>
  );
};
