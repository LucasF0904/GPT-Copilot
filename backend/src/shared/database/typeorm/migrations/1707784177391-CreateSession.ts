import { MigrationInterface, QueryRunner, Table, TableIndex } from 'typeorm';
import { SESSION, IDX_SESSION_USER_ID, IDX_SESSION_SESSION_ID } from '@shared/database/typeorm/migrations/options/TableSession';

export class CreateSession1707784177391 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // @ts-ignore session
        await queryRunner.createTable(new Table(SESSION));
        await queryRunner.createIndex('session', new TableIndex(IDX_SESSION_USER_ID));
        await queryRunner.createIndex('session', new TableIndex(IDX_SESSION_SESSION_ID));

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropIndex('session', 'IDX_SESSION_SESSION_ID');
        await queryRunner.dropIndex('session', 'IDX_SESSION_USER_ID');
        await queryRunner.dropTable('session');
    }

}
