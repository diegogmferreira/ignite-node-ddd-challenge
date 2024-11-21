import { Product } from "@/domain/entities/product";
import type { ProductRepository } from "@/domain/repositories/product-repository";

interface CreateProductUseCaseRequest {
  name: string;
  size: string;
  color: string;
  quantity?: number;          // Optional, default to 0
  sellingPrice: number;
  costPrice?: number;         // Optional, if cost is not known at creation
  supplierIds?: string[];     // Optional, if suppliers are added later
  minStockQtd?: number;       // Optional, if stock is not known at creation
}

export class CreateProductUseCase {
  constructor(private productRepository: ProductRepository) { }

  async execute({
    name,
    size,
    color,
    quantity = 0,
    sellingPrice,
    costPrice = 0,
    supplierIds = [],
    minStockQtd = 0
  }: CreateProductUseCaseRequest) {
    
    if (!name || !size || !color || !sellingPrice) {
      throw new Error("Missing required fields: name, size, color, or sellingPrice.");
    }

    const product = Product.create({
      name,
      size,
      color,
      qtd: quantity,
      sellingPrice,
      costPrice,
      supplierIds,
      minStockQtd
    });

    await this.productRepository.create(product);

    return product;
  }
}