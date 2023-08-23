import { DefaultNamingStrategy, NamingStrategyInterface, Table } from 'typeorm';

export class DatabaseNamingStrategy extends DefaultNamingStrategy implements NamingStrategyInterface {
    private joinColumns(columnNames: string[]): string {
        return columnNames.join('_');
    }

    primaryKeyName(tableOrName: Table | string, columnNames: string[]): string {
        return `PK_${this.getTableName(tableOrName)}_${this.joinColumns(columnNames)}`;
    }

    foreignKeyName(
        referencingTableOrName: Table | string,
        referencingColumnNames: string[],
        referencedTablePath?: string,
        referencedColumnNames?: string[],
    ): string {
        const referencingTableName = this.getTableName(referencingTableOrName);

        const referencingReferencedGroup = referencingColumnNames.map((referencingColumn, index) => {
            return `${referencingTableName}_${referencingColumn}_${referencedTablePath}_${referencedColumnNames[index]}`;
        });

        return `FK_${referencingReferencedGroup.join('_')}`;
    }

    indexName(tableOrName: Table | string, columnNames: string[]): string {
        return `IDX_${this.getTableName(tableOrName)}_${this.joinColumns(columnNames)}`;
    }

    uniqueConstraintName(tableOrName: Table | string, columnNames: string[]): string {
        return `UQ_${this.getTableName(tableOrName)}_${this.joinColumns(columnNames)}`;
    }
}
