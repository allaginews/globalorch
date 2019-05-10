import {DefaultCrudRepository} from '@loopback/repository';
import {Regions} from '../models';
import {GlobalOrchDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class RegionsRepository extends DefaultCrudRepository<
  Regions,
  typeof Regions.prototype.id
> {
  constructor(
    @inject('datasources.globalOrch') dataSource: GlobalOrchDataSource,
  ) {
    super(Regions, dataSource);
  }
}
