import './add-cell.css';
import { useActions } from '../hooks/use-actions';

interface AddCellProps {
    nextCellId: string | null,
    forceVisible: boolean
}

const AddCell: React.FC<AddCellProps> = ({ nextCellId, forceVisible }) => {
    const { insertCellAfter } = useActions();

    return (
        <div className={`add-cell ${forceVisible && 'force-visible'}`} >
            
                <div className="add-buttons">
                    <button className="button is-rounded is-active is-primary is-small"
                        onClick={() => insertCellAfter(nextCellId, 'code')}>
                        <span className="icon is-small"><i className="fas fa-code"></i></span>
                        <span>
                            Code</span>
                    </button>
                    <button className="button is-rounded is-active is-primary is-small"
                        onClick={() => insertCellAfter(nextCellId, 'text')}>
                        <span className="icon is-small"><i className="fas fa-file-alt"></i></span>
                        <span>
                            Text</span>
                    </button>
                </div>
                <div className="divider"></div>
            </div >

    )
}


export default AddCell;