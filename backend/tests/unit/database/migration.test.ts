import { CreateUsers1707784040066 } from '@shared/database/typeorm/migrations/1707784040066-CreateUsers';
import { CreateSession1707784177391 } from '@shared/database/typeorm/migrations/1707784177391-CreateSession';
import { CreateResponse1707784193824 } from '@shared/database/typeorm/migrations/1707784193824-CreateResponse';
import { CreateQuery1707784201988 } from '@shared/database/typeorm/migrations/1707784201988-CreateQuery';
import { QueryRunner, Table } from "typeorm";

describe("CreateUsersTable Migration", () => {
    let createUsersTable: CreateUsers1707784040066;
    let queryRunnerMock: Partial<QueryRunner>;
    beforeEach(() => {
        createUsersTable = new CreateUsers1707784040066();
        queryRunnerMock = {
          createTable: jest.fn(),
          dropTable: jest.fn(),
          createIndex: jest.fn(),
          dropIndex: jest.fn(),
        };
    });
    it("should correctly create users table", async () => {
        await createUsersTable.up(queryRunnerMock as QueryRunner);
        expect(queryRunnerMock.createTable).toHaveBeenCalledWith(expect.any(Table));
    });
    it("should correctly drop users table", async () => {
        await createUsersTable.down(queryRunnerMock as QueryRunner);
        expect(queryRunnerMock.dropTable).toHaveBeenCalledWith("users");
    });
   
});

describe("CreateSessionTable Migration", () => {
    let createSessionTable: CreateSession1707784177391;
    let queryRunnerMock: Partial<QueryRunner>;
    beforeEach(() => {
        createSessionTable = new CreateSession1707784177391();
        queryRunnerMock = {
          createTable: jest.fn(),
          dropTable: jest.fn(),
          createIndex: jest.fn(),
          dropIndex: jest.fn(),
        };
    });
    it("should correctly create session table", async () => {
        await createSessionTable.up(queryRunnerMock as QueryRunner);
        expect(queryRunnerMock.createTable).toHaveBeenCalledWith(expect.any(Table));
    });
    it("should correctly drop session table", async () => {
        await createSessionTable.down(queryRunnerMock as QueryRunner);
        expect(queryRunnerMock.dropTable).toHaveBeenCalledWith("session");
    });
});

describe("CreateResponseTable Migration", () => {
    let createResponseTable: CreateResponse1707784193824;
    let queryRunnerMock: Partial<QueryRunner>;
    beforeEach(() => {
        createResponseTable = new CreateResponse1707784193824();
        queryRunnerMock = {
          createTable: jest.fn(),
          dropTable: jest.fn(),
          createIndex: jest.fn(),
          dropIndex: jest.fn(),
        };
    });
    it("should correctly create response table", async () => {
        await createResponseTable.up(queryRunnerMock as QueryRunner);
        expect(queryRunnerMock.createTable).toHaveBeenCalledWith(expect.any(Table));
    });
    it("should correctly drop response table", async () => {
        await createResponseTable.down(queryRunnerMock as QueryRunner);
        expect(queryRunnerMock.dropTable).toHaveBeenCalledWith("response");
    });  
});

describe("CreateQueryTable Migration", () => {
    let createQueryTable: CreateQuery1707784201988;
    let queryRunnerMock: Partial<QueryRunner>;
    beforeEach(() => {
        createQueryTable = new CreateQuery1707784201988();
        queryRunnerMock = {
          createTable: jest.fn(),
          dropTable: jest.fn(),
          createIndex: jest.fn(),
          dropIndex: jest.fn(),
        };
    });

    it("should correctly create query table", async () => {
        await createQueryTable.up(queryRunnerMock as QueryRunner);
        expect(queryRunnerMock.createTable).toHaveBeenCalledWith(expect.any(Table));
    });
    it("should correctly drop query table", async () => {
        await createQueryTable.down(queryRunnerMock as QueryRunner);
        expect(queryRunnerMock.dropTable).toHaveBeenCalledWith("query");
    });
});