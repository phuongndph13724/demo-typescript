import { ProductType } from "../types/product";
import instance from "./instance";

export const list = () => {
  const url = "/products";
  return instance.get(url);
};
export const remove = (id: any) => {
  const url = `/products/${id}`;
  return instance.delete(url);
};
export const add = (product: ProductType) => {
  const url = `/products`;
  return instance.post(url, product);
};
export const read = (id: any) => {
  const url = `/products/${id}`;
  return instance.get(url);
};
export const update = (product: any) => {
  const url = `/products/${product.id}`;
  return instance.put(url, product);
};
