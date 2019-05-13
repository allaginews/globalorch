import { Entity, model, property } from '@loopback/repository';

@model({ settings: { strict: false } })
export class Products extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true
  })
  id: string;

  @property({
    type: 'string',
    required: true,
  })
  productName: string;

  @property({
    type: 'number',
    default: 1,
  })
  status?: number;

  @property({
    type: 'date',
  })
  addedDate?: string;

  @property({
    type: 'date',
  })
  updatedDate?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  [prop: string]: any;

  constructor(data?: Partial<Products>) {
    super(data);
  }
}
