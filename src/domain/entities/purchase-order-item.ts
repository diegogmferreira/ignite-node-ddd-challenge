import { Entity } from "@/core/entities/entity";
import { UniqueEntityID } from "@/core/entities/unique-entity";

interface Props {
  productId: string;
  qtd: number;
  createdAt: Date;
  supplierId: string;
  items: PurchaseOrderItem[]
}

export class PurchaseOrderItem extends Entity<Props> {
  static create(props: Props, id?: UniqueEntityID) {
    const purchaseOrderItem = new PurchaseOrderItem(props, id);
    return purchaseOrderItem;
  }
}