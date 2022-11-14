import { ActionType, WayType } from '../types';
import { ADD_WAY, DELETE_WAY, ADD_TO_FAVORITE } from '../constants';

const defaultState: WayType[] = [];

export const reducer = (state = defaultState, action: ActionType) => {
    switch (action.type) {
        case ADD_WAY:
            return [...state, action.payload];
        case DELETE_WAY:
            const index = state.findIndex((way: WayType) => {return way.id === action.payload.id});

            return [...state.slice(0, index), ...state.slice(index + 1)];
        case ADD_TO_FAVORITE:
            const favoriteIndex = state.findIndex((way: WayType) => {return way.id === action.payload.id});

            return state.map((item: WayType, index: number) => {
                if (index !== favoriteIndex) {
                  return item;
                }
            
                return {
                  ...item,
                  ...action.payload.item
                }
              });
        default: 
            return state;
    }
}