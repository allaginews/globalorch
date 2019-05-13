import {DefaultCrudRepository} from '@loopback/repository';
import {Clients} from '../models';
import {GlobalOrchDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ClientsRepository extends DefaultCrudRepository<
  Clients,
  typeof Clients.prototype.id
> {
  constructor(
    @inject('datasources.globalOrch') dataSource: GlobalOrchDataSource,
  ) {
    super(Clients, dataSource);
  }
}
