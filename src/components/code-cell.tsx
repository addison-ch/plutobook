import { useEffect } from 'react';
import CodeEditor from './code-editor';
import Preview from './preview';
import Resizable from './resizable';
import { Cell } from '../state';
import { useActions } from '../hooks/use-actions';
import { useTypedSelector } from '../hooks/use-typed-selector';
import './code-cell.css';

interface CodeCellProps {
    cell: Cell
}
const CodeCell: React.FC<CodeCellProps> = ({ cell }) => {

    const { updateCell, createBundle } = useActions();
    const bundle = useTypedSelector((state) => state.bundles[cell.id])



    useEffect(() => {
        if (!bundle) {
            createBundle(cell.id, cell.content)
            return;
        }
        const timer = setTimeout(async () => {
            createBundle(cell.id, cell.content)

        }, 1000)

        return () => {
            clearTimeout(timer);
        }
    }, [cell.content, cell.id, createBundle])



    return (
        <Resizable direction="vertical">
            <div style={{ height: '100%', display: 'flex', flexDirection: 'row' }}>
                <Resizable direction="horizontal">
                    <CodeEditor initialValue={cell.content}
                        onChange={(value) => updateCell(cell.id, value)} />
                </Resizable><div className="progress-wrapper">
                    {
                        !bundle || bundle.loading
                            ? (<div className="progress-cover">

                                <progress className="progress is-small is-primary" max="100">Loading</progress>
                            </div>) : (<Preview code={bundle.code} bundlingStatus={bundle.err} />)
                    }</div>

            </div>
        </Resizable>
    )
}



export default CodeCell;