import {useRecoilCallback, useSetRecoilState} from 'recoil';
import {EDocumentItemType} from '../../../../models';
import {documentItemIds} from '../../../../state/documentState';
import {uniqueId} from 'lodash';
import {documentItemDefaultDimensions, documentItemWithId} from '../../../../state/documentItemsState';

export const useInsertItem = () => {
  const setItemsIds = useSetRecoilState<string[]>(documentItemIds);

  return useRecoilCallback(({set}) => (itemType: EDocumentItemType) => {
    const insertingItemId = uniqueId();

    setItemsIds((prev) => [...prev, insertingItemId]);

    set(documentItemWithId(insertingItemId), {
      id: insertingItemId,
      type: itemType.valueOf(),
      dimensions: {...documentItemDefaultDimensions},
    });
  });
};
