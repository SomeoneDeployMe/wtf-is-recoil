import {atom} from 'recoil';

export const backdropColor = atom({
  key: 'backdropColor',
  default: '#fff',
});

export const documentItemIds = atom<string[]>({
  key: 'documentItemIds',
  default: [],
});
