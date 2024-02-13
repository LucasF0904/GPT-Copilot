export const USERS = {
    name: 'users',
    columns: [
        {
            name: 'username',
            type: 'varchar',
            isPrimary: true,
        },
        {
            name: 'email',
            type: 'varchar',
        },
        {
            name: 'password',
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

export const IDX_USERS_USERNAME = {
    name: 'IDX_USERS_USERNAME',
    columnNames: ['username']
};
