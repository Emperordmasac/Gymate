import { useState } from "react";

export const useToggle = (initialState: boolean = false): any[] => {
    const [state, setState] = useState(initialState);

    const toggle = (): void => {
        setState(!state);
    };

    return [state, toggle];
};
