import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import { Regions } from '../models';
import { RegionsRepository } from '../repositories';

export class RegionsController {
  constructor(
    @repository(RegionsRepository)
    public regionsRepository: RegionsRepository,
  ) { }

  @post('/regions', {
    responses: {
      '200': {
        description: 'Regions model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Regions } } },
      },
    },
  })
  async create(@requestBody() regions: Regions): Promise<Regions> {
    return await this.regionsRepository.create(regions);
  }

  @get('/regions/count', {
    responses: {
      '200': {
        description: 'Regions model count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Regions)) where?: Where,
  ): Promise<Count> {
    return await this.regionsRepository.count(where);
  }

  @get('/regions', {
    responses: {
      '200': {
        description: 'Array of Regions model instances',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Regions } },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Regions)) filter?: Filter,
  ): Promise<Regions[]> {
    return await this.regionsRepository.find({ where: { status: 1 } });
  }

  @patch('/regions', {
    responses: {
      '200': {
        description: 'Regions PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async updateAll(
    @requestBody() regions: Regions,
    @param.query.object('where', getWhereSchemaFor(Regions)) where?: Where,
  ): Promise<Count> {
    return await this.regionsRepository.updateAll(regions, where);
  }

  @get('/regions/{id}', {
    responses: {
      '200': {
        description: 'Regions model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Regions } } },
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Regions> {
    return await this.regionsRepository.findById(id);
  }

  @patch('/regions/{id}', {
    responses: {
      '204': {
        description: 'Regions PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() regions: Regions,
  ): Promise<void> {
    await this.regionsRepository.updateById(id, regions);
  }

  @put('/regions/{id}', {
    responses: {
      '204': {
        description: 'Regions PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() regions: Regions,
  ): Promise<void> {
    await this.regionsRepository.replaceById(id, regions);
  }

  @del('/regions/{id}', {
    responses: {
      '204': {
        description: 'Regions DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.regionsRepository.deleteById(id);
  }
}
