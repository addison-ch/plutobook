import React from 'react'
import { useActions } from '../hooks/use-actions';
import './action-bar.css';

interface AProps {
    id: string
}

const ActionBar: React.FC<AProps> = ({ id }) => {
    const { moveCell, deleteCell } = useActions();

    return (
        <div className="action-bar">
            <button className="button is-primary is-small" onClick={() => moveCell(id, 'up')}>
                <span className="icon"><i className="fas fa-angle-double-up"></i></span>
            </button>
            <button className="button is-primary is-small" onClick={() => moveCell(id, 'down')}>
                <span className="icon"><i className="fas fa-angle-double-down"></i></span>

            </button>
            <button className="button is-primary is-small" onClick={() => deleteCell(id)}>
                <span className="icon"><i className="fas fa-trash"></i></span>

            </button>
        </div>
    )
}

export default ActionBar;
