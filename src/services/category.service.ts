import API from '../config/axios';
import { Category } from '../types/general';

const CategoryService = {
  async getAllCategories(): Promise<Category[] | undefined> {
    try {
      const { data } = await API.get<Category[]>('/categories');
      return data;
    } catch (err) {
      console.error(err.message);
    }
  },
};

export default CategoryService;
