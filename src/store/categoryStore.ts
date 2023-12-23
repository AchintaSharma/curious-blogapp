import { create } from "zustand";

type CategoryStore = {
  categories: string[];
  addCategory: (category: string) => void;
};

const useCategoryStore = create<CategoryStore>((set) => {
  return {
    categories: ["Music", "Technology", "Web Development"],
    addCategory: (category) =>
      set((state) => {
        return { categories: [...state.categories, category] };
      }),
  };
});

export default useCategoryStore;
