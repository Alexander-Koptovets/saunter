export enum TravelMode  {
    BICYCLING = 'BICYCLING',
    DRIVING = 'DRIVING',
    TRANSIT = 'TRANSIT',
    WALKING = 'WALKING',
}

export type MarkerType = {
    lat: number,
    lng: number,
}

export type ActionType = {
    type: string,
    payload: WayType | ActionRemoveType | any,
}

export type ActionRemoveType = {
    id: number,
}

export type ActionFavoriteType = {
    item: { isFavorite: boolean },
} & ActionRemoveType 

export type WayType = {
    id: number,
    title: string,
    description: string,
    position: MarkerType[],
    distance: string,
    isFavorite: boolean, 
}