import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import Vocabulary from '@/app/domains/entities/Vocabulary';

@Injectable()
export class VocabularyRepository extends Repository<Vocabulary> {
    constructor(private dataSource: DataSource) {
        super(Vocabulary, dataSource.createEntityManager());
    }
}
