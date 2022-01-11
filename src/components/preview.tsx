import { useRef, useEffect } from 'react';
import './preview.css'


interface PreviewProps {
    code: string;
}

const html = `
        <html>
            <head> 
            <style> html {background-color: white;}</style></head>
            <body>
            <div id="root"> </div>
            <script> 
            window.addEventListener('message', (event)=>{
                try {
                eval(event.data);}
                catch (err){
                    const root = document.querySelector('#root');
                    root.innerHTML = '<div style="color: pink;"><h3>Runtime Error</h3>' + err + '</div>';
                    console.error(err);
                }
            }, false);
            </script>
            </body>
        </html>
    `;

const Preview: React.FC<PreviewProps> = ({ code }) => {
    const iframe = useRef<any>();

    useEffect(() => {
        iframe.current.srcdoc = html;
        iframe.current.contentWindow.postMessage(code, '*')
    }, [code])

    return (
        <div className="iframe-wrapper">
        <iframe
            title="preview"
            ref={iframe}
            srcDoc={html}
            sandbox="allow-scripts" /></div>
    )
}

export default Preview;
