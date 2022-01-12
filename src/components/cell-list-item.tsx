import './cell-list-item.css';
import React from 'react';
import { Cell } from '../state';
import CodeCell from './code-cell';
import TextEditor from './text-editor';
import ActionBar from './action-bar';


interface CellListItemProps {
    cell: Cell
}
const CellListItem: React.FC<CellListItemProps> = ({ cell }) => {

    let child: JSX.Element;
    if (cell.type === 'code') {
        child = <CodeCell cell={cell} />
    }
    else {
        child = <TextEditor cell={cell} />
    }

    return (
        <div className="cell-list-item">
            {child}
            <ActionBar id={cell.id} />

        </div>
    )
}

export default CellListItem;
