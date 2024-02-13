import { MigrationInterface, QueryRunner, Table, TableIndex } from 'typeorm';
import { IDX_USERS_USERNAME, USERS } from '@shared/database/typeorm/migrations/options/TableUsers';

export class CreateUsers1707784040066 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // @ts-ignore user
        await queryRunner.createTable(new Table(USERS));
        await queryRunner.createIndex('users', new TableIndex(IDX_USERS_USERNAME));

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropIndex('users', 'IDX_USERS_USERNAME');
        await queryRunner.dropTable('users');
    }

}
