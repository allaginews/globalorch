import { Entity, model, property } from '@loopback/repository';

@model({ settings: { strict: false } })
export class Regions extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  regionName: string;

  @property({
    type: 'string',
    id: true,
    generated: true
  })
  id: string;

  @property({
    type: 'number',
    default: 1,
  })
  status: number;

  @property({
    type: 'date',
  })
  added_date: string;

  @property({
    type: 'date',
  })
  update_date?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  [prop: string]: any;

  constructor(data?: Partial<Regions>) {
    super(data);
  }
}
