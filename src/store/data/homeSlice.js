import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    title: '',
    subTitle: '',
    section2: [],
    pinkDivider: '',
    cards: [],
    videoURL: '',
    productsSlider: [],
    newsSliderTitle: '',
    newsSlider: [],
};

export const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        setHomepageData: (state, { payload }) => {
            state.title = payload.title;
            state.subTitle = payload.subTitle;
            state.section2 = payload.section2;
            state.pinkDivider = payload.pinkDivider;
            state.cards = payload.cards;
            state.videoURL = payload.videoURL;
            state.productsSlider = payload.productsSlider;
            state.newsSliderTitle = payload.newsSliderTitle;
            state.newsSlider = payload.newsSlider;
        },
    },
});

export const { setHomepageData } = homeSlice.actions;