import { Entity } from "@/core/entities/entity";
import { UniqueEntityID } from "@/core/entities/unique-entity";
import type { Optional } from "@/core/types/optional";

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
  get name() {
    return this.props.name;
  }

  get size() {
    return this.props.size;
  }

  get color() {
    return this.props.color;
  }

  get supplierIds() {
    return this.props.supplierIds;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  set supplierIds(supplierIds: string[]) {
    this.props.supplierIds = supplierIds;
    this.touch();
  }

  get minStockQtd() {
    return this.props.minStockQtd;
  }

  set minStockQtd(minStockQtd: number) {
    this.props.minStockQtd = minStockQtd;
    this.touch();
  }

  get sellingPrice() {
    return this.props.sellingPrice;
  }

  set sellingPrice(sellingPrice: number) {
    this.props.sellingPrice = sellingPrice;
    this.touch();
  }

  get costPrice() {
    return this.props.costPrice;
  }

  set costPrice(costPrice: number) {
    this.props.costPrice = costPrice;
    this.touch();
  }

  get qtd() {
    return this.props.qtd;
  }

  set qtd(qtd: number) {
    this.props.qtd = qtd;
    this.touch();
  }

  private touch() {
    this.props.updatedAt = new Date();
  }

  static create(props: Optional<Props, 'createdAt'>, id?: UniqueEntityID) {
    const product = new Product({
      ...props,
      createdAt: new Date(),
    }, id);
    return product;
  }

  static findById(id: UniqueEntityID, props: Props) {
    return new Product(props, id)
  }

  update(updates: Partial<Omit<Props, 'createdAt' | 'updatedAt'>>): void {
    if (updates.name) {
      this.props.name = updates.name;
    }
    if (updates.size) {
      this.props.size = updates.size;
    }
    if (updates.color) {
      this.props.color = updates.color;
    }
    if (updates.sellingPrice !== undefined) {
      this.props.sellingPrice = updates.sellingPrice;
    }
    if (updates.costPrice !== undefined) {
      this.props.costPrice = updates.costPrice;
    }
    if (updates.qtd !== undefined) {
      this.props.qtd = updates.qtd;
    }
    if (updates.minStockQtd !== undefined) {
      this.props.minStockQtd = updates.minStockQtd;
    }
    if (updates.supplierIds) {
      this.props.supplierIds = updates.supplierIds;
    }

    this.touch(); // Update the `updatedAt` timestamp
  }
}