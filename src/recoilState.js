import { atom } from 'recoil';

export const searchQueryRecoil = atom({
    key: 'searchQueryRecoil',
    default: '',
});

export const isSearchRecoil = atom({
    key: 'isSearchRecoil',
    default: false,
});
