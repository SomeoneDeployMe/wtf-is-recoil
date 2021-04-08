import {IMemeApiResponse} from '../models';

export const getRandomMemeUrl = (): Promise<IMemeApiResponse> => fetch('https://meme-api.herokuapp.com/gimme').then((response) => response.json());
