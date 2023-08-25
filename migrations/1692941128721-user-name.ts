import { MigrationInterface, QueryRunner } from 'typeorm';

export class UserName1692941128721 implements MigrationInterface {
    name = 'UserName1692941128721';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "User"
                ADD "name" character varying
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "User"
                DROP COLUMN "name"
        `);
    }
}
