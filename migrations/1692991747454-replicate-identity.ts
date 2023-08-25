import { MigrationInterface, QueryRunner } from 'typeorm';

export class ReplicateIdentity1692991747454 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "User"
                REPLICA IDENTITY FULL;
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "User"
                REPLICA IDENTITY DEFAULT;
        `);
    }
}
