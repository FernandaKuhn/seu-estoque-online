import { useEffect, useState } from 'react';
import { getAllProducts, createProduct, updateProduct, deleteProduct } from '../services/productService';
import type { Product } from '../types/Product';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    const data = await getAllProducts();
    setProducts(data);
  };

  const addProduct = async (product: Omit<Product, 'id' | 'createdIn' | 'updatedIn'>) => {
    const created = await createProduct(product);
    setProducts((prev) => [...prev, created]);
  };

  const editProduct = async (product: Product) => {
    const updated = await updateProduct(product.id, product);
    setProducts((prev) => prev.map((p) => (p.id === updated.id ? updated : p)));
  };

  const removeProduct = async (id: number) => {
    await deleteProduct(id);
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, addProduct, editProduct, removeProduct };
};