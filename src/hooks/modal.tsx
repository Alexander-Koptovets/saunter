import { useDispatch, useSelector } from "react-redux";
import { State } from "../types";

import { setIsOpen } from "../redux/modalSlice";

type UseModal = {
    isOpen: boolean;
    updateIsOpen: (value: boolean) => void;
};

export const useModal = (): UseModal => {
    const dispatch = useDispatch();

    const isOpen = useSelector((state: State) => state.modal.isOpen);

    const updateIsOpen = (value: boolean) => dispatch(setIsOpen(value));

    return { isOpen, updateIsOpen };
};
