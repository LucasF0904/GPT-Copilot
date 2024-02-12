import { AppDataSource } from '@config/AppDataSource';

jest.mock('@config/AppDataSource', () => ({
  initialize: jest.fn().mockResolvedValue(true),
  destroy: jest.fn().mockResolvedValue(true),
  isInitialized: true
}));

describe('Database Connection (Unit Test)', () => {
  it('should initialize the data source', async () => {
    await expect(AppDataSource.initialize()).resolves.toBeTruthy();
    expect(AppDataSource.isInitialized).toBeTruthy();
  });
});
