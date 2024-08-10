import { create } from "zustand";

export const useSmoothieItems = create((set) => ({
    smoothieItems: [],
    addFruit: (fruit) => set(
        state => {
            if(state.smoothieItems.length >= 5) {return state}
            return state.smoothieItems.find(item => item.id === fruit.id)? {smoothieItems: state.smoothieItems} : {smoothieItems : [...state.smoothieItems, fruit]}
        }
    ),
    removeFruit: (fruitId) => set(state => ({ smoothieItems: state.smoothieItems.filter(item => item.id!== fruitId) })),
    clearSmoothieItems: () => set({ smoothieItems: [] }),
}));