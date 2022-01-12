import './code-editor.css';
import MonacoEditor, { EditorDidMount } from '@monaco-editor/react';
import prettier from 'prettier';
import parser from 'prettier/parser-babel';
import { useRef } from 'react';

interface CodeEditorProps {
    initialValue: string;
    onChange(value: string): void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ onChange, initialValue }) => {

    const editorRef = useRef<any>();

    const onEditorDidMount: EditorDidMount = (getValue, monacoEditor) => {
        editorRef.current = monacoEditor;
        monacoEditor.onDidChangeModelContent(() => {
            onChange(getValue())
        })

        monacoEditor.getModel()?.updateOptions({ tabSize: 2 });
    }

    const onFormatClick = () => {
        const notPretty = editorRef.current.getModel().getValue();

        const yesPretty = prettier.format(notPretty, {
            parser: 'babel',
            plugins: [parser],
            useTabs: false,
            semi: true,
            singleQuote: true
        }).replace(/\n$/, '');

        editorRef.current.setValue(yesPretty);
    }

    return (
        <div className="editor-wrapper">
            <button className="button button-format is-success is-small" onClick={onFormatClick}>Prettify!</button>
            <MonacoEditor
                editorDidMount={onEditorDidMount}
                value={initialValue}
                theme="dark"
                language="javascript"
                height="100%"
                options={{
                    wordWrap: 'on',
                    minimap: { enabled: false },
                    showUnused: false,
                    cursorBlinking: 'phase',
                    folding: false,
                    lineNumbersMinChars: 3,
                    fontSize: 16,
                    scrollBeyondLastLine: false,
                    automaticLayout: true

                }} /></div>);
}


export default CodeEditor;