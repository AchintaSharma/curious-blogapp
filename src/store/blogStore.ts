import axios from "axios";
import { create } from "zustand";
import { Blog } from "../types/blog.ts";
import BaseUrl from "../api/api.ts";

// zustand functions
type State = {
  blogs: Blog[];
  addBlog: (blog: Blog) => void;
  deleteBlog: (id: string) => void;
  updateBlog: (id: string, blog: Blog) => void;
  getAllBlog: () => void;
};

const useBlogStore = create<State>((set) => {
  return {
    blogs: [],

    addBlog: async (blog: Blog): Promise<Blog> => {
      try {
        const response = await axios.post<Blog>(`${BaseUrl}/blogs`, blog);
        const newBlog = response.data;
        set((state) => {
          return { blogs: [...state.blogs, newBlog] };
        });
        return newBlog;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },

    deleteBlog: async (id: string) => {
      try {
        await axios.delete(`${BaseUrl}/blogs/${id}`);
        set((state) => {
          return { blogs: state.blogs.filter((blog) => blog.id !== id) };
        });
      } catch (error) {
        console.error(error);
        throw error;
      }
    },

    updateBlog: async (id: string, blog: Blog) => {
      try {
        await axios.put(`${BaseUrl}/blogs/${id}`, blog);
        set((state) => {
          return {
            blogs: state.blogs.map((b) => (b.id === id ? blog : b)),
          };
        });
      } catch (error) {
        console.error(error);
        throw error;
      }
    },

    getAllBlog: async () => {
      try {
        const response = await axios.get<Blog[]>(`${BaseUrl}/blogs`);
        const blogs = response.data;
        set(() => {
          return { blogs };
        });
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
  };
});

export default useBlogStore;
