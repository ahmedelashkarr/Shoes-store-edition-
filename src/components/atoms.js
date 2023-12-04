import { atom } from "recoil";

export const userInfo = atom({
    key: 'userInfo', // unique ID (with respect to other atoms/selectors)
    default: [], // default value (aka initial value)
});

