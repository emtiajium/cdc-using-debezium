import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, Unique } from 'typeorm';
import Definition from '@/app/domains/entities/Definition';
import { User } from '@/app/domains/entities/User';

@Entity('Vocabulary')
@Unique(['word', 'user'])
export default class Vocabulary {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar' })
    word: string;

    @OneToMany(() => Definition, (definition) => definition.vocabulary, { eager: false, cascade: false })
    definitions: Definition[];

    @ManyToOne(() => User, (user) => user.vocabularies, { eager: false, cascade: false })
    user: User;
}
