import { useDispatch, useSelector } from "react-redux";
import { State, WayType } from "../types";

import { setWay, removeWay, setToFavorite } from "../redux/waySlice";

type UseWay = {
    ways: WayType[];
    addWay: (value: WayType) => void;
    deleteWAY: (value: number) => void;
    addToFavorite: (value: number) => void;
};

export const useWay = (): UseWay => {
    const dispatch = useDispatch();

    const ways = useSelector((state: State) => state.way.ways);

    const addWay = (value: WayType) => dispatch(setWay(value));

    const deleteWAY = (value: number) => dispatch(removeWay(value));

    const addToFavorite = (value: number) => dispatch(setToFavorite(value));

    return {
        ways,
        addWay,
        deleteWAY,
        addToFavorite,
    };
};
