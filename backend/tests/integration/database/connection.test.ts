import { AppDataSource } from '@config/AppDataSource';
import { Entity } from './entity/Entity';

describe('Database Connection (Integration Test)', () => {
  beforeAll(async () => {
    await AppDataSource.initialize();
  });

  afterAll(async () => {
    await AppDataSource.destroy();
  });

  it('should insert and fetch data from the database', async () => {
    const repository = AppDataSource.getRepository(Entity);
    const entity = new Entity();
    entity.name = 'Test';
    await repository.save(entity);

    const fetchedEntity = await repository.findOneBy({ name: 'Test' });
    expect(fetchedEntity).not.toBeNull();
    expect(fetchedEntity.name).toEqual('Test');
  });
});
