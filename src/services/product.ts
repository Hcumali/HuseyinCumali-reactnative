import {get, post} from './request'

export const getProducts = () => get("/products")
export const getProductDetail = (id: string) => get(`/products/${id}`)