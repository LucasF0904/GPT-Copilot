import { MigrationInterface, QueryRunner, TableIndex } from 'typeorm';
import { RESPONSE, IDX_RESPONSE_RESPONSE_ID, IDX_RESPONSE_QUERY_ID  } from '@shared/database/typeorm/migrations/options/TableResponse';

export class CreateResponse1707784193824 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // @ts-ignore response
        await queryRunner.createTable(new Table(RESPONSE));
        await queryRunner.createIndex('response', new TableIndex(IDX_RESPONSE_RESPONSE_ID));
        await queryRunner.createIndex('response', new TableIndex(IDX_RESPONSE_QUERY_ID));        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropIndex('response', 'IDX_RESPONSE_QUERY_ID');
        await queryRunner.dropIndex('response', 'IDX_RESPONSE_RESPONSE_ID');
        await queryRunner.dropTable('response');
    }

}
