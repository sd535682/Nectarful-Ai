import { create } from "zustand";

export const useSmoothieItems = create((set) => ({
    smoothieItems: [],
    addFruit: (fruit) => set(state => ({ smoothieItems: state.smoothieItems.find(item => item.id === fruit.id)? state.smoothieItems : [...state.smoothieItems, fruit] })),
    removeFruit: (fruitId) => set(state => ({ smoothieItems: state.smoothieItems.filter(item => item.id!== fruitId) })),
    clearSmoothieItems: () => set({ smoothieItems: [] }),
}));