import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Vocabulary from '@/app/domains/entities/Vocabulary';

@Entity('User')
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', nullable: false, unique: true })
    email: string;

    @OneToMany(() => Vocabulary, (vocabulary) => vocabulary.user, { eager: false, cascade: false })
    vocabularies: Vocabulary[];
}
