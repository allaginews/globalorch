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
import { Clients } from '../models';
import { ClientsRepository } from '../repositories';

export class ClientsController {
  constructor(
    @repository(ClientsRepository)
    public clientsRepository: ClientsRepository,
  ) { }

  @post('/clients', {
    responses: {
      '200': {
        description: 'Clients model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Clients } } },
      },
    },
  })
  async create(@requestBody() clients: Clients): Promise<Clients> {
    return await this.clientsRepository.create(clients);
  }

  @get('/clients/count', {
    responses: {
      '200': {
        description: 'Clients model count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Clients)) where?: Where,
  ): Promise<Count> {
    return await this.clientsRepository.count(where);
  }

  @get('/clients', {
    responses: {
      '200': {
        description: 'Array of Clients model instances',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Clients } },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Clients)) filter?: Filter,
  ): Promise<Clients[]> {
    return await this.clientsRepository.find({ where: { status: 1 } });
  }

  @patch('/clients', {
    responses: {
      '200': {
        description: 'Clients PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async updateAll(
    @requestBody() clients: Clients,
    @param.query.object('where', getWhereSchemaFor(Clients)) where?: Where,
  ): Promise<Count> {
    return await this.clientsRepository.updateAll(clients, where);
  }

  @get('/clients/{id}', {
    responses: {
      '200': {
        description: 'Clients model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Clients } } },
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Clients> {
    return await this.clientsRepository.findById(id);
  }

  @patch('/clients/{id}', {
    responses: {
      '204': {
        description: 'Clients PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() clients: Clients,
  ): Promise<void> {
    await this.clientsRepository.updateById(id, clients);
  }

  @put('/clients/{id}', {
    responses: {
      '204': {
        description: 'Clients PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() clients: Clients,
  ): Promise<void> {
    await this.clientsRepository.replaceById(id, clients);
  }

  @del('/clients/{id}', {
    responses: {
      '204': {
        description: 'Clients DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.clientsRepository.deleteById(id);
  }
}
