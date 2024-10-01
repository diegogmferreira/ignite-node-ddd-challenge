import { Entity } from "@/core/entities/entity";
import { UniqueEntityID } from "@/core/entities/unique-entity";

enum StockMovementType {
  ENTRIES = 'entries',
  EXITS = 'exits'
}

interface Props {
  productId: string;
  qtd: number;
  type: StockMovementType;
  createdAt: Date;
}

export class StockMovement extends Entity<Props> {
  static create(props: Props, id?: UniqueEntityID) {
    const stockMovement = new StockMovement(props, id);
    return stockMovement;
  }
}