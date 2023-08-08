import { combineReducers, configureStore } from '@reduxjs/toolkit';

import modalReducer from './modalSlice';
import mapReducer from './mapSlice';
import wayReducer from './waySlice';

const rootReducer = combineReducers({
    modal: modalReducer,
    map: mapReducer,
    way: wayReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});