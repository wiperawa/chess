import React from 'react';
import { FC } from 'react';
import { Cell } from '../models/Cell';


interface CellProps {
    cell: Cell
}
const CellComponent: FC<CellProps> = ({cell}) => ((
        <div className={['cell', cell.color].join(' ')}>
          {cell.figure?.name}
        </div>
    )
);

export default CellComponent;