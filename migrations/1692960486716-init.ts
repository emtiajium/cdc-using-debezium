import { MigrationInterface, QueryRunner } from 'typeorm';

export class Init1692960486716 implements MigrationInterface {
    name = 'Init1692960486716';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "User"
            (
                "id"    uuid              NOT NULL DEFAULT uuid_generate_v4(),
                "email" character varying NOT NULL,
                "name"  character varying,
                CONSTRAINT "UQ_User_email" UNIQUE ("email"),
                CONSTRAINT "PK_User_id" PRIMARY KEY ("id")
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE "User"
        `);
    }
}
