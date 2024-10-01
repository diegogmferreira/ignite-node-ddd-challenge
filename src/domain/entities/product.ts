import { Entity } from "@/core/entities/entity";
import { UniqueEntityID } from "@/core/entities/unique-entity";

interface Props {
  name: string;
  size: string;
  color: string;
  costPrice: number;
  sellingPrice: number;
  qtd: number;
  minStockQtd: number;
  supplierIds: string[];
  createdAt: Date;
  updatedAt?: Date;
}

export class Product extends Entity<Props> {
  static create(props: Props, id?: UniqueEntityID) {
    const product = new Product(props, id);
    return product;
  }
}