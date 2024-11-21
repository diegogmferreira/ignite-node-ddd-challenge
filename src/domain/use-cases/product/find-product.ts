import { UniqueEntityID } from "@/core/entities/unique-entity";
import { Product } from "@/domain/entities/product";
import type { ProductRepository } from "@/domain/repositories/product-repository";

interface FindProductUseCaseRequest {
  id: UniqueEntityID;
}

export class CreateProductUseCase {
  constructor(private productRepository: ProductRepository) { }

  async execute({
    id
  }: FindProductUseCaseRequest) {

    if (id) {
      throw new Error("Missing required fields: id.");
    }

    const productData = await this.productRepository.findById(id);

    if (!productData) {
      throw new Error("Product not found.");
    }

    // Rehydrate the domain entity using the `Product.findById` method
    const product = Product.findById(
      new UniqueEntityID(id),
      productData // Props from the repository
    );

    return { product };
  }
}