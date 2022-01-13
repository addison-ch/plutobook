import { useTypedSelector } from '../hooks/use-typed-selector';
import { Fragment, useEffect } from 'react'
import React from 'react';
import CellListItem from './cell-list-item';
import AddCell from './add-cell';
import './cell-list.css';
import { useActions } from '../hooks/use-actions';
import { saveCells } from '../state/action-creators';

const CellList: React.FC = () => {
    const cells = useTypedSelector(({ cells: { order, data } }) => {
        return order.map((id) => {
            return data[id];
        })
    })

    const { fetchCells, saveCells } = useActions();
    useEffect(() => {
        fetchCells()
    }, [])

    useEffect(() => {
        saveCells();
    }, [cells])
    const renderedCells = cells.map((cell) => (
        <Fragment key={cell.id}> <CellListItem cell={cell} />
            <AddCell forceVisible={cells.length === 0} nextCellId={cell.id} />
        </Fragment>

    ))

    return (
        <div className="cell-list">
            <AddCell forceVisible={cells.length === 0} nextCellId={null} />
            {renderedCells}

        </div>
    )
}

export default CellList;
