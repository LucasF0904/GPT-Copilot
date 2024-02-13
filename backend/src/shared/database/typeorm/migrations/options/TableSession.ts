export const SESSION = {
    name: 'session',
    columns: [
        {
            name: 'session_id',
            type: 'varchar',
            isPrimary: true,
        },
        {
            name: 'start_time',
            type: 'timestamp',
        },
        {
            name: 'end_time',
            type: 'timestamp',
        },
        {
            name: 'status',
            type: 'varchar',
        },
        {
            name: 'user_id',
            type: 'varchar',
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

export const IDX_SESSION_SESSION_ID = {
    name: 'IDX_SESSION_SESSION_ID',
    columnNames: ['session_id']
};

export const IDX_SESSION_USER_ID = {
    name: 'IDX_SESSION_USER_ID',
    columnNames: ['user_id']
};