export const QUERY = {
    name: 'query',
    columns: [
        {
            name: 'query_id',
            type: 'varchar',
            isPrimary: true,
        },
        {
            name: 'session_id',
            type: 'varchar',            
        },
        {
            name: 'query_text',
            type: 'varchar',
        },
        {
            name: 'query_time',
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

export const IDX_QUERY_QUERY_ID = {
    name: 'IDX_QUERY_QUERY_ID',
    columnNames: ['query_id']
};

export const IDX_QUERY_SESSION_ID = {
    name: 'IDX_QUERY_SESSION_ID',
    columnNames: ['session_id']
};