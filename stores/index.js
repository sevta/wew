import create from "zustand";

const useStore = create((set) => ({
  session: null
}));

export { useStore };
