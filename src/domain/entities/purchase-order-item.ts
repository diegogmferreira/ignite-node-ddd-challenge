import { Entity } from "@/core/entities/entity";
import { UniqueEntityID } from "@/core/entities/unique-entity";

interface Props {
  productId: string;
  qtd: number;
  createdAt: Date;
  supplierId: string;
  purchasePrice: number;
  items: PurchaseOrderItem[];
}

export class PurchaseOrderItem extends Entity<Props> {
  get productId() {
    return this.props.productId;
  }

  get qtd() {
    return this.props.qtd;
  }

  get supplierId() {
    return this.props.supplierId;
  }

  get items() {
    return this.props.items;
  }

  

  static create(props: Props, id?: UniqueEntityID) {
    const purchaseOrderItem = new PurchaseOrderItem(props, id);
    return purchaseOrderItem;
  }
}