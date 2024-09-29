import { Entity } from "@/core/entities/entity";
import { UniqueEntityID } from "@/core/entities/unique-entity";

interface Props {
  name: string;
  size: string;
  color: string;
  price: number;
  qtd: number;
  minStockQtd: number;
  createdAt: Date;
  updatedAt?: Date;
}

export class Product extends Entity<Props> {
  static create(props: Props, id?: UniqueEntityID): Product {
    const product = new Product(props, id);
    return product;
  }
}