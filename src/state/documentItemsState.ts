import {atom, atomFamily, selector, selectorFamily} from 'recoil';
import {EDocumentItemType, IDimensions, TDocumentItem} from '../models';
import {maxBy, minBy} from 'lodash';
import {getRandomMemeUrl} from '../api';

export const documentItemDefaultDimensions = Object.freeze<IDimensions>({
  width: 100,
  height: 100,
  top: 100,
  left: 100,
});

export const selectedDocumentItems = atom<string[]>({
  key: 'selectedDocumentItems',
  default: [],
});

export const documentItemState = atomFamily<TDocumentItem, string>({
  key: 'documentItemState',
  default: (id: string) => ({
    id,
    type: EDocumentItemType.RECTANGLE,
    dimensions: {...documentItemDefaultDimensions},
  }),
});

export const imageUrlState = selectorFamily({
  key: 'imageUrlState',
  get: (id: string) => async ({get}) => {
    const response = await getRandomMemeUrl();

    return response.preview[2];
  }
});

export const imageDimensionsState = selectorFamily<{width: number, height: number}, string>({
  key: 'imageDimensionsState',
  get: (id: string) => ({get}) => {
    const imageUrl = get(imageUrlState(id));

    return new Promise((resolve, reject) => {
      const image = new Image();

      image.onload = () => {
        resolve({width: image.width, height: image.height});
      }

      image.onerror = () => {
        reject();
      }

      image.src = imageUrl;
    });
  }
});

export const documentItemWithId = selectorFamily<TDocumentItem, string>({
  key: 'documentItemWithId',
  get: (id: string) => ({get}) => get(documentItemState(id)),
  set: (id: string) => ({set, get}, newValue) => {
    const oldValue = get(documentItemState(id));

    if (
      oldValue.type === EDocumentItemType.IMAGE && (
        oldValue.dimensions.width !== (newValue as TDocumentItem).dimensions.width ||
        oldValue.dimensions.height !== (newValue as TDocumentItem).dimensions.height
      )
    ) {
      const {width: oldWidth, height: oldHeight} = oldValue.dimensions;
      const {width: newWidth, height: newHeight} = (newValue as TDocumentItem).dimensions;
      const deltaX = newWidth - oldWidth;
      const deltaY = newHeight - oldHeight;
      const delta = Math.abs(deltaX) >= Math.abs(deltaY) ? deltaX : deltaY;
      const aspectRatio = oldWidth / oldHeight;
      const width = (oldHeight + delta) * aspectRatio;
      const height = oldWidth / aspectRatio + delta;

      set(documentItemState(id), {
        ...(newValue as TDocumentItem),
        dimensions: {
          ...(newValue as TDocumentItem).dimensions,
          width,
          height,
        }
      });
    } else {
      set(documentItemState(id), newValue);
    }

  },
});

const getBoundingBoxSize = (items: TDocumentItem[]) => {
  const leftItem = minBy(items, (item) => item.dimensions.left);
  const topItem = minBy(items, (item) => item.dimensions.top);
  const rightItem = maxBy(items, (item) => item.dimensions.left + item.dimensions.width);
  const bottomItem = maxBy(items, (item) => item.dimensions.top + item.dimensions.height);

  return {
    left: leftItem?.dimensions?.left,
    top: topItem?.dimensions?.top,
    width: rightItem && leftItem && ((rightItem?.dimensions?.left + rightItem?.dimensions?.width) - leftItem?.dimensions?.left),
    height: bottomItem && topItem && ((bottomItem?.dimensions?.top + bottomItem?.dimensions?.height) - topItem?.dimensions?.top),
  };
};

export const boundingBoxSizeSelector = selector({
  key: 'boundingBoxSizeSelector',
  get: ({get}) => {
    const selectedIds = get(selectedDocumentItems);
    const items = selectedIds.map((id) => get(documentItemState(id)));

    return getBoundingBoxSize(items);
  }
});
