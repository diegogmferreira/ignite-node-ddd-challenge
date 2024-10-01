import { Entity } from "@/core/entities/entity";
import { UniqueEntityID } from "@/core/entities/unique-entity";

interface Props {
  productId: string;
  qtd: number;
  profit: number;
  createdAt: Date;
}

export class ProductSalesHistory extends Entity<Props> {
  static create(props: Props, id?: UniqueEntityID) {
    const productSalesHistory = new ProductSalesHistory(props, id);
    return productSalesHistory;
  }
}