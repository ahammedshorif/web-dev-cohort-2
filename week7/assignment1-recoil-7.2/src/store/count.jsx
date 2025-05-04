import { atom, selector } from "recoil";

export const countAtom = atom({
  key: 'countAtom', // must be unique
  default: 0, // initial value
});

export const evenSelector = selector({
  key:"evenSelector",
  get: ({get})=>{
    const count =get(countAtom);
    return count%2;
  }
})