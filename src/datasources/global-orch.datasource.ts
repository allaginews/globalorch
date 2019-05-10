import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './global-orch.datasource.json';

export class GlobalOrchDataSource extends juggler.DataSource {
  static dataSourceName = 'globalOrch';

  constructor(
    @inject('datasources.config.globalOrch', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
