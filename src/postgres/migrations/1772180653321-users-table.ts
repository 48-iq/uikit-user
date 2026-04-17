import { MigrationInterface, QueryRunner } from "typeorm";

export class UsersTable1772180653321 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`
        CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

        CREATE TABLE users (
          "id" character varying PRIMARY KEY,
          "email" character varying UNIQUE NOT NULL,
          "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
          "updatedAt" TIMESTAMP
        );
      `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`
        DROP TABLE users;
      `);
    }

}
