import { create } from 'zustand';

type Store = {
    header: string;
    setHeader: (newHeader: string) => void;
}

const useStore = create<Store>((set) => ({
    header: 'Dashboard',
    setHeader: (newHeader: string) => set((state) => ({ header: newHeader  }))
}));

export default useStore;