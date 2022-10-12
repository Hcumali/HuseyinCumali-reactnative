import { get } from './request';

export const getCategories = () => get('/category');
export const getCategoryById = (id: string) => get(`/category/${id}`);
