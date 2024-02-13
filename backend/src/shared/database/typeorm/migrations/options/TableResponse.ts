export const RESPONSE = {
    name: 'response',
    columns: [
        {
            name: 'response_id',
            type: 'varchar',
            isPrimary: true,
        },
        {
            name: 'query_id',
            type: 'varchar',
        },
        {
            name: 'response_data',
            type: 'varchar',
        },
        {
            name: 'response_time',
            type: 'timestamp',
        },
        {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
        },
        {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
        },
        {
            name: 'deleted_at',
            type: 'timestamp',
            isNullable: true,
        }
    ],
};

export const IDX_RESPONSE_RESPONSE_ID = {
    name: 'IDX_RESPONSE_RESPONSE_ID',
    columnNames: ['response_id']
};

export const IDX_RESPONSE_QUERY_ID = {
    name: 'IDX_RESPONSE_QUERY_ID',
    columnNames: ['query_id']
};