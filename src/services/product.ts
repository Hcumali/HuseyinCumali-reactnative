import { get, post } from './request';

export const addProduct = (data: object) => post('/products', data);
export const getProducts = () => get('/products');
export const getProductById = (id: string) => get(`/products/${id}`);
