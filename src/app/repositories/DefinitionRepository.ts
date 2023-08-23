import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import Definition from '@/app/domains/entities/Definition';

@Injectable()
export class DefinitionRepository extends Repository<Definition> {
    constructor(private dataSource: DataSource) {
        super(Definition, dataSource.createEntityManager());
    }
}
