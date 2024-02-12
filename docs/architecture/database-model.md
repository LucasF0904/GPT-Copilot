# Database Model

This section provides an overview of the database schema for the Faith Point system. The system uses a relational database management system (RDBMS) to store data, with the following tables:

### Users

The `users` table stores information about system users, such as name, email, password (encrypted), and whether the user is an administrator or not.

| Field          | Type         | Description                    | Requeired |
| -------------- | ------------ | ------------------------------ |-----------|
| username           | varchar(255) | User's name                    |      ✔️    |
| email          | varchar(255) | User's email address           |      ✔️    |
| password\_hash | varchar(255) | Hashed password for user login |      ✔️    |
| created_at     | datetime     | Creation Date                  |      ✔️    |
| updated_at     | datetime     | If updated                     |           |
| deleted_at     | datetime     | If Deleted, is a soft Delete   |           |

### Session

The `session` table stores information about user sessions, such as the user's ID, session token, and expiration date.

| Field          | Type         | Description                    | Requeired |
| -------------- | ------------ | ------------------------------ |-----------|
| session_id     | varchar(255) | Session ID                     |      ✔️    |
| startTime      | datetime     | Start Time                     |      ✔️    |
| endTime        | datetime     | End Time                       |      ✔️    |
| user_id        | int          | User ID                        |      ✔️    |

### Query

The `query` table stores information about the queries made by the user, such as the user's ID, the query, and the response.

| Field          | Type         | Description                    | Requeired |
| -------------- | ------------ | ------------------------------ |-----------|
| query_id       | int          | Query ID                       |      ✔️    |
| session_id     | varchar(255) | Session ID                     |      ✔️    |
| queryText      | varchar(255) | Query Text                     |      ✔️    |
| queryTime      | datetime     | Query Time                     |      ✔️    |

### Response

The `response` table stores information about the responses made by the system, such as the query ID, the response, and the response time.

| Field          | Type         | Description                    | Requeired |
| -------------- | ------------ | ------------------------------ |-----------|
| response_id    | int          | Response ID                    |      ✔️    |
| query_id       | int          | Query ID                       |      ✔️    |
| responseData   | varchar(255) | Response Data                  |      ✔️    |
| responseTime   | datetime     | Response Time                  |      ✔️    |

