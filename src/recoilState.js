import { atom } from 'recoil';

export const searchQueryRecoil = atom({
    key: 'searchQueryRecoil',
    default: '',
});

export const isSearchRecoil = atom({
    key: 'isSearchRecoil',
    default: false,
});

export const modalStateRecoil = atom({
    key: 'modalStateRecoil',
    default: false,
});

export const modalContentRecoil = atom({
    key: 'modalContentRecoil',
    default: {},
});
