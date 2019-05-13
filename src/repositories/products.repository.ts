import {DefaultCrudRepository} from '@loopback/repository';
import {Products} from '../models';
import {GlobalOrchDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ProductsRepository extends DefaultCrudRepository<
  Products,
  typeof Products.prototype.id
> {
  constructor(
    @inject('datasources.globalOrch') dataSource: GlobalOrchDataSource,
  ) {
    super(Products, dataSource);
  }
}
