import { create } from 'zustand';

const useStore = create((set) => ({
    currentUser: "Guest",
}))

export default useStore