import { MigrationInterface, QueryRunner } from 'typeorm';

export class Init1691759071804 implements MigrationInterface {
    name = 'Init1691759071804';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "Definition"
            (
                "id"           uuid              NOT NULL DEFAULT uuid_generate_v4(),
                "meaning"      character varying NOT NULL,
                "vocabularyId" uuid              NOT NULL,
                CONSTRAINT "PK_Definition_id" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "Vocabulary"
            (
                "id"     uuid              NOT NULL DEFAULT uuid_generate_v4(),
                "word"   character varying NOT NULL,
                "userId" uuid,
                CONSTRAINT "UQ_Vocabulary_word_userId" UNIQUE ("word", "userId"),
                CONSTRAINT "PK_Vocabulary_id" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "User"
            (
                "id"    uuid              NOT NULL DEFAULT uuid_generate_v4(),
                "email" character varying NOT NULL,
                CONSTRAINT "UQ_User_email" UNIQUE ("email"),
                CONSTRAINT "PK_User_id" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            ALTER TABLE "Definition"
                ADD CONSTRAINT "FK_Definition_vocabularyId_Vocabulary_id" FOREIGN KEY ("vocabularyId") REFERENCES "Vocabulary" ("id") ON DELETE CASCADE ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "Vocabulary"
                ADD CONSTRAINT "FK_Vocabulary_userId_User_id" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "Vocabulary"
                DROP CONSTRAINT "FK_Vocabulary_userId_User_id"
        `);
        await queryRunner.query(`
            ALTER TABLE "Definition"
                DROP CONSTRAINT "FK_Definition_vocabularyId_Vocabulary_id"
        `);
        await queryRunner.query(`
            DROP TABLE "User"
        `);
        await queryRunner.query(`
            DROP TABLE "Vocabulary"
        `);
        await queryRunner.query(`
            DROP TABLE "Definition"
        `);
    }
}
