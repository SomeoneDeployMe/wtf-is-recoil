import {useRecoilValue, useSetRecoilState} from 'recoil';
import {documentItemState, imageDimensionsState} from '../../../../state/documentItemsState';
import {useEffect} from 'react';

export const useDefineDefaultImageDimensions = (itemId: string) => {
  const imageDimensions = useRecoilValue(imageDimensionsState(itemId));
  const setItem = useSetRecoilState(documentItemState(itemId));

  useEffect(() => {
    setItem((prev) => ({
      ...prev,
      dimensions: {
        ...prev.dimensions,
        width: imageDimensions.width,
        height: imageDimensions.height,
      },
    }));
  }, [setItem])
};
