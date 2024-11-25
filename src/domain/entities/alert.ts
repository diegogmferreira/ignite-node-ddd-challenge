import { Entity } from "@/core/entities/entity";
import type { UniqueEntityID } from "@/core/entities/unique-entity";
import type { Optional } from "@/core/types/optional";

interface Props {
  productId: UniqueEntityID;
  email: string;
  sentAt?: Date;
  createdAt: Date;
  updatedAt?: Date;
}

export class Alert extends Entity<Props> {
  get productId() {
    return this.props.productId;
  }

  get email() {
    return this.props.email;
  }

  set email(email: string) {
    this.props.email = email;
    this.touch();
  }

  get sentAt(): Date | undefined {
    return this.props.sentAt;
  }

  set sentAt(date: Date) {
    this.props.sentAt = date;
    this.touch();
  }

  get createdAt() {
    return this.props.createdAt;
  }

  get updatedAt() {
    return this.props.updatedAt;
  }

  private touch() {
    this.props.updatedAt = new Date();
  }

  static create(props: Optional<Props, 'createdAt'>, id?: UniqueEntityID) {
    const alert = new Alert({
      ...props,
      createdAt: new Date(),
    }, id);
    return alert;
  }
}