import { useState, useEffect } from 'react';
import CodeEditor from './code-editor';
import Preview from './preview';
import bundle from '../bundler';
import Resizable from './resizable';

const CodeCell = () => {

    const [code, setCode] = useState('');
    const [input, setInput] = useState('');

    useEffect(() => {
        const timer = setTimeout(async () => {
            const output = await bundle(input);
            setCode(output)
        }, 1000)

        return () => {
            clearTimeout(timer);
        }
    }, [input])

    const onClick = async () => {
        const output = await bundle(input);
        setCode(output);
        // iframe.current.contentWindow.postMessage(result.outputFiles[0].text, '*')
    }

    return (
        <Resizable direction="vertical">
            <div style={{ height: '100%', display: 'flex', flexDirection: 'row' }}>
                <Resizable direction="horizontal">
                    <CodeEditor initialValue="console.log('Hey there!')"
                        onChange={(value) => setInput(value)} />
                </Resizable>
                <Preview code={code} />
            </div>
        </Resizable>
    )
}



export default CodeCell;