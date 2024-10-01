import { Entity } from "@/core/entities/entity";
import { UniqueEntityID } from "@/core/entities/unique-entity";
import { PurchaseOrderItem } from "./purchase-order-item";

interface Props {
  productId: string;
  supplierId: string;
  items: PurchaseOrderItem[]
  createdAt: Date;
}

export class PurchaseOrder extends Entity<Props> {
  static create(props: Props, id?: UniqueEntityID) {
    const purchaseOrder = new PurchaseOrder(props, id);
    return purchaseOrder;
  }
}