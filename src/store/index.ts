import { configureStore } from '@reduxjs/toolkit';
import { CardReducer } from './cardReducer';

const reducers = {
    cards: CardReducer,
}

const store = configureStore(
    {reducer: reducers}
)

export type RootState = ReturnType<typeof store.getState>

export default store