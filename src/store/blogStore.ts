import axios from "axios";
import { create } from "zustand";
import { Blog } from "../types/blog.ts";

import BaseUrl from "../api/api.ts";

// api functions

// get all blogs
export const fetchAllBlog = async () => {
  try {
    const response = await axios.get<Blog[]>(`${BaseUrl}/blogs`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// create blog
export const createBlog = async (blog: Blog) => {
  try {
    const response = await axios.post(`${BaseUrl}/blogs`, blog);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// delete blog
export const removeBlog = async (id: string) => {
  try {
    await axios.delete(`${BaseUrl}/blogs/${id}`);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// update blog
export const editBlog = async (id: string, blog: unknown) => {
  try {
    await axios.put(`${BaseUrl}/blogs/${id}`, blog);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

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
    addBlog: async (blog) => {
      try {
        const newBlog = await createBlog(blog);
        set((state) => {
          return { blogs: [...state.blogs, newBlog] };
        });
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    deleteBlog: async (id) => {
      try {
        await removeBlog(id);
        set((state) => {
          return { blogs: state.blogs.filter((blog) => blog.id !== id) };
        });
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    updateBlog: async (id, blog) => {
      try {
        await editBlog(id, blog);
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
        const blogs = await fetchAllBlog();
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
