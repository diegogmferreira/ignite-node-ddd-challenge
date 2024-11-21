import { UniqueEntityID } from "@/core/entities/unique-entity";
import { Product } from "@/domain/entities/product";
import type { ProductRepository } from "@/domain/repositories/product-repository";

interface UpdateProductUseCaseRequest {
  id: string;
  name?: string;
  size?: string;
  color?: string;
  sellingPrice?: number;
  costPrice?: number;
  qtd?: number;
  minStockQtd?: number;
  supplierIds?: string[];
}


export class CreateProductUseCase {
  constructor(private productRepository: ProductRepository) { }

  async execute({
    id,
    name,
    size,
    color,
    sellingPrice,
    costPrice,
    qtd,
    minStockQtd,
    supplierIds,
  }: UpdateProductUseCaseRequest) {
    if (!id) {
      throw new Error("Product ID is required.");
    }

    const existingProduct = await this.productRepository.findById(id);

    if (!existingProduct) {
      throw new Error("Product not found.");
    }

    // Rehydrate the domain entity
    const product = Product.findById(
      new UniqueEntityID(id),
      existingProduct
    );
    
        // Save the updated product
    await this.productRepository.update(product);

    


    return product;
  }
}