export type State = {
    modal: Modal;
    map: Map;
    way: Ways;
};

export type Ways = {
    ways: WayType[];
};

export type Map = {
    markers: MarkerType[];
    distance: string;
    description: WayType | null;
};

export type Modal = {
    isOpen: boolean;
};

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

export type WayType = {
    id: number,
    title: string,
    description: string,
    position: MarkerType[],
    distance: string,
    isFavorite: boolean, 
}