import { Entity } from "@/core/entities/entity";
import { UniqueEntityID } from "@/core/entities/unique-entity";
import type { Optional } from "@/core/types/optional";

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
  static create(props: Optional<Props, 'createdAt'>, id?: UniqueEntityID) {
    const stockMovement = new StockMovement({
      ...props,
      createdAt: new Date(),
    }, id);
    return stockMovement;
  }
}