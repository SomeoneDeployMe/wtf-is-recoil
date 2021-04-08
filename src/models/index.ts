export enum EDocumentItemType {
  RECTANGLE,
  ELLIPSE,
  IMAGE,
}

export interface IShapeSize {
  width: number;
  height: number;
}

export interface IShapeStyledProps extends Partial<IShapeSize> {
  isSelected?: boolean;
}

export interface IDimensions {
  width: number;
  height: number;
  top: number;
  left: number;
}

type TRectangle = {
  type: EDocumentItemType.RECTANGLE,
}
type TEllipse = {
  type: EDocumentItemType.ELLIPSE,
}

type TStaticImage = {
  type: EDocumentItemType.IMAGE,
}

interface IDocumentItemCommon {
  id: string;
  dimensions: IDimensions;
}

export type TDocumentItem = IDocumentItemCommon & (TRectangle | TEllipse | TStaticImage);

export interface IMemeApiResponse {
  url: string;
  preview: string[];
}
