import { MigrationInterface, QueryRunner, TableIndex } from 'typeorm';
import { QUERY, IDX_QUERY_QUERY_ID, IDX_QUERY_SESSION_ID } from '@shared/database/typeorm/migrations/options/TableQuery';

export class CreateQuery1707784201988 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // @ts-ignore query
        await queryRunner.createTable(new Table(QUERY));
        await queryRunner.createIndex('query', new TableIndex(IDX_QUERY_QUERY_ID));
        await queryRunner.createIndex('query', new TableIndex(IDX_QUERY_SESSION_ID));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropIndex('query', 'IDX_QUERY_SESSION_ID');
        await queryRunner.dropIndex('query', 'IDX_QUERY_QUERY_ID');
        await queryRunner.dropTable('query');
    }

}
