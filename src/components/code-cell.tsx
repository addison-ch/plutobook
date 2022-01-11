import { useState } from 'react';
import CodeEditor from './code-editor';
import Preview from './preview';
import bundle from '../bundler';


const CodeCell = () => {

    const [code, setCode] = useState('');
    const [input, setInput] = useState('');

    const onClick = async () => {
        const output = await bundle(input);
        setCode(output);
        // iframe.current.contentWindow.postMessage(result.outputFiles[0].text, '*')
    }

    return <div>
        <CodeEditor initialValue="console.log('Hey there!')"
            onChange={(value) => setInput(value)} />

        <div>
            <button onClick={onClick}> Submit
            </button>
        </div>

        <Preview code={code} />
    </div>
}



export default CodeCell;