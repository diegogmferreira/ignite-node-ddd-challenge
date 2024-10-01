import { Entity } from "@/core/entities/entity";
import { UniqueEntityID } from "@/core/entities/unique-entity";

interface Props {
  name: string;
  deliveryTime: number;
  createdAt: Date;
  updatedAt?: Date;
}

export class Supplier extends Entity<Props> {
  static create(props: Props, id?: UniqueEntityID) {
    const supplier = new Supplier(props, id);
    return supplier;
  }
}