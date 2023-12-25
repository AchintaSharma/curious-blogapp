import axios from "axios";
import { create } from "zustand";
import BaseUrl from "../api/api.ts";

export type Category = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  id: number;
  category: string;
};

type CategoryStore = {
  categories: Category[];
  addCategory: (category: string) => void;
  getCategory: () => void;
  updateCategory: (id: number, category: string) => void;
  deleteCategory: (id: number) => void;
};

const useCategoryStore = create<CategoryStore>((set) => {
  return {
    categories: [],

    // add categories
    addCategory: async (category: string) => {
      try {
        const response = await axios.post(`${BaseUrl}/categories`, {
          category,
        });
        const newCategory: Category = response.data;
        set((state) => {
          return { categories: [...state.categories, newCategory] };
        });

        // console.log('category added')
        return newCategory;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    getCategory: async () => {
      const response = await axios.get<Category[]>(`${BaseUrl}/categories`);
      const categories = response.data;

      // console.log('get category', categories)

      set(() => {
        return { categories };
      });
    },
    updateCategory: async (id: number, updateCategory: string) => {
      try {
        const response = await axios.put(`${BaseUrl}/categories/${id}`, {
          category: updateCategory,
        });
        const updatedCategoryData: Category = response.data;
        set((state) => {
          return {
            categories: state.categories.map((c) =>
              c.id === id
                ? { ...c, category: updatedCategoryData.category }
                : c,
            ),
          };
        });
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    deleteCategory: async (id: number) => {
      try {
        await axios.delete(`${BaseUrl}/categories/${id}`);
        set((state) => {
          return {
            categories: state.categories.filter(
              (category) => category.id !== id,
            ),
          };
        });
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
  };
});

export default useCategoryStore;
