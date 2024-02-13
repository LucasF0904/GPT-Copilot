import { AppDataSource } from '@config/AppDataSource';

describe('Migration Effect Test', () => {
  beforeAll(async () => {
    await AppDataSource.initialize();
    await AppDataSource.runMigrations();
  });

  afterAll(async () => {    
    await AppDataSource.undoLastMigration();
    await AppDataSource.destroy();
  });
  describe('Table Users', () => {

    it('should have the new table created by the migration', async () => {
        const queryRunner = AppDataSource.createQueryRunner();
        const hasTable = await queryRunner.hasTable('users');
        expect(hasTable).toBeTruthy();
      });

    describe('Verify all Collumns', () => {
        describe('Username', () => {
            it('should have the new column created by the migration', async () => {
                const queryRunner = AppDataSource.createQueryRunner();
                const table = await queryRunner.getTable('users');
                const column = table?.findColumnByName('username');
                expect(column).toBeDefined();
              });
              it('should have the username column with correct properties', async () => {
                const queryRunner = AppDataSource.createQueryRunner();
                const table = await queryRunner.getTable('users');
                const usernameColumn = table?.findColumnByName('username');
                expect(usernameColumn).toBeDefined();
                expect(usernameColumn?.type).toBe("varchar");
                expect(usernameColumn?.isNullable).toBe(false);
              }); 
        });

        describe('Email', () => {
            it('should have the new column created by the migration', async () => {
                const queryRunner = AppDataSource.createQueryRunner();
                const table = await queryRunner.getTable('users');
                const column = table?.findColumnByName('email');
                expect(column).toBeDefined();
              });
              it('should have the username column with correct properties', async () => {
                const queryRunner = AppDataSource.createQueryRunner();
                const table = await queryRunner.getTable('users');
                const emailColumn = table?.findColumnByName('email');
                expect(emailColumn).toBeDefined();
                expect(emailColumn?.type).toBe("varchar");
                expect(emailColumn?.isNullable).toBe(false);
              }); 
        });

        describe('Password', () => {
            it('should have the new column created by the migration', async () => {
                const queryRunner = AppDataSource.createQueryRunner();
                const table = await queryRunner.getTable('users');
                const column = table?.findColumnByName('password');
                expect(column).toBeDefined();
              });

              it('should have the username column with correct properties', async () => {
                const queryRunner = AppDataSource.createQueryRunner();
                const table = await queryRunner.getTable('users');
                const passwordColumn = table?.findColumnByName('password');
              
                expect(passwordColumn).toBeDefined();
                expect(passwordColumn?.type).toBe("varchar");
                expect(passwordColumn?.isNullable).toBe(false);
              });
        });

        describe('Created At', () => {
            it('should have the new column created by the migration', async () => {
                const queryRunner = AppDataSource.createQueryRunner();
                const table = await queryRunner.getTable('users');
                const column = table?.findColumnByName('created_at');
                expect(column).toBeDefined();
              });
              it('should have the username column with correct properties', async () => {
                const queryRunner = AppDataSource.createQueryRunner();
                const table = await queryRunner.getTable('users');
                const createdAtColumn = table?.findColumnByName('created_at');
                expect(createdAtColumn).toBeDefined();
                expect(createdAtColumn?.type).toBe("timestamp");
                expect(createdAtColumn?.isNullable).toBe(false);
              });
        });

        describe('Updated At', () => {
            it('should have the new column created by the migration', async () => {
                const queryRunner = AppDataSource.createQueryRunner();
                const table = await queryRunner.getTable('users');
                const column = table?.findColumnByName('updated_at');
                expect(column).toBeDefined();
              });
              it('should have the username column with correct properties', async () => {
                const queryRunner = AppDataSource.createQueryRunner();
                const table = await queryRunner.getTable('users');
                const updatedAtColumn = table?.findColumnByName('updated_at');
                expect(updatedAtColumn).toBeDefined();
                expect(updatedAtColumn?.type).toBe("timestamp");
                expect(updatedAtColumn?.isNullable).toBe(false);
              });
        });

        describe('Deleted At', () => {
            it('should have the new column created by the migration', async () => {
                const queryRunner = AppDataSource.createQueryRunner();
                const table = await queryRunner.getTable('users');
                const column = table?.findColumnByName('deleted_at');
                expect(column).toBeDefined();
              });
              it('should have the username column with correct properties', async () => {
                const queryRunner = AppDataSource.createQueryRunner();
                const table = await queryRunner.getTable('users');
                const deletedAtColumn = table?.findColumnByName('deleted_at');              
                expect(deletedAtColumn).toBeDefined();
                expect(deletedAtColumn?.type).toBe("timestamp");
                expect(deletedAtColumn?.isNullable).toBe(true);
              });
        });
    });      
  });  
});
