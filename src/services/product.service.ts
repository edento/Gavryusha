import API from '../config/axios';
import { Product } from '../types/general';

const ProductService = {
  async getAllProducts(): Promise<Product[] | undefined> {
    try {
      const { data } = await API.get<Product[]>('/products');
      return data;
    } catch (err) {
      console.error(err.message);
      return undefined;
    }
  },
};

export default ProductService;
