import type { Product } from "../entities/product";

export interface ProductRepository {
  create(product: Product): Promise<void>;
  update(product: Product): Promise<void>;
  findById(id: string): Promise<Product>;
  // findAll(): Promise<Product[]>;
}