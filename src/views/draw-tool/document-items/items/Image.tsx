import React, {FC} from 'react';
import {useRecoilValue} from 'recoil';
import {imageUrlState} from '../../../../state/documentItemsState';
import {useDefineDefaultImageDimensions} from '../hooks';
import styled from '@emotion/styled';

interface IImageProps {
  itemId: string;
  width?: number;
  height?: number;
  isSelected?: boolean;
}

export const Image: FC<IImageProps> = ({itemId, width, height, isSelected}) => {
  useDefineDefaultImageDimensions(itemId);
  const imageUrl = useRecoilValue(imageUrlState(itemId));

  return <ImageContainer imageUrl={imageUrl} width={width} height={height} isSelected={isSelected} />
};

const ImageContainer = styled.div<Partial<IImageProps> & {imageUrl: string; isSelected: boolean | undefined;}>`
  width: ${({width}) => width}px;
  height: ${({height}) => height}px;
  background-image: url(${({imageUrl}) => imageUrl});
  background-size: 100% 100%;
  border: 2px solid #282c34;

  ${({isSelected}) => isSelected && `
    border: 2px dashed #2f45e2;
  `}
`;
