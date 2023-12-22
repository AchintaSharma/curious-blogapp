import axios from "axios";
import { create } from "zustand";
import { Blog } from "../types/blog.ts";
import BaseUrl from "../api/api.ts";

// generate unique Id
const generateUniqueId = () => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const idLength = 10;

  let result = "";
  for (let i = 0; i < idLength; i += 1) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;
};

// zustand functions
type State = {
  blogs: Blog[];
  addBlog: (blog: Blog) => void;
  deleteBlog: (id: string) => void;
  updateBlog: (id: string, blog: Blog) => void;
  getAllBlog: () => void;
  currentBlogId: string | null;
};

const useBlogStore = create<State>((set) => {
  return {
    blogs: [],
    currentBlogId: null,

    // Add Blog
    addBlog: async (blog: Blog): Promise<Blog> => {
      try {
        // Add a unique id to the blog object
        const blogWithId = { ...blog, id: generateUniqueId() };

        const response = await axios.post<Blog>(`${BaseUrl}/blogs`, blogWithId);
        const newBlog = response.data;

        set((state) => {
          return {
            blogs: [...state.blogs, newBlog],
            currentBlogId: newBlog.id,
          };
        });
        return newBlog;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },

    // Delete Blog
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

    // Update Blog
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

    // Get all blogs
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
