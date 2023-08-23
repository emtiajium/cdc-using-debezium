import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Vocabulary from '@/app/domains/entities/Vocabulary';

@Entity('Definition')
export default class Definition {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', nullable: false })
    meaning: string;

    @ManyToOne(() => Vocabulary, (vocabulary) => vocabulary.definitions, {
        eager: false,
        cascade: false,
        nullable: false,
        onDelete: 'CASCADE',
    })
    vocabulary: Vocabulary;
}
