import { useDispatch, useSelector } from "react-redux";
import { MarkerType, State, WayType } from "../types";

import {
    setMarkers,
    setDistance,
    setDescription,
} from "../redux/mapSlice";

type UseMap = {
    markers: MarkerType[];
    distance: string;
    description: WayType | null;
    addMarkers: (value: MarkerType[]) => void;
    addDistance: (value: string) => void;
    addDescription: (value: WayType | null) => void;
};

export const useMap = (): UseMap => {
    const dispatch = useDispatch();

    const markers = useSelector((state: State) => state.map.markers);

    const distance = useSelector((state: State) => state.map.distance);

    const description = useSelector((state: State) => state.map.description);

    const addMarkers = (value: MarkerType[]) => dispatch(setMarkers(value));

    const addDistance = (value: string) => dispatch(setDistance(value));

    const addDescription = (value: WayType | null) => dispatch(setDescription(value));

    return {
        markers,
        distance,
        description,
        addMarkers,
        addDistance,
        addDescription,
    };
};
