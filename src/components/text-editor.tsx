import React, { useState, useEffect, useRef } from 'react'
import MDEditor from '@uiw/react-md-editor';
import './text-editor.css';

const TextEditor: React.FC = () => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [editing, setEditing] = useState(false)

    useEffect(() => {
        const listener = (event: MouseEvent) => {
            if (ref.current && event.target && ref.current.contains(event.target as Node)) {
                return;
            }
            setEditing(false);
        };
        document.addEventListener('click', listener, { capture: true })

        return () => {
            document.removeEventListener('click', listener, { capture: true })
        }
    }, [])

    if (editing) {
        return <div ref={ref}><MDEditor /></div>
    }
    return (
        <div onClick={() => setEditing(true)}>
            <MDEditor.Markdown source={"hi"} />
        </div>
    )
}

export default TextEditor;
