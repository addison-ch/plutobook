import 'bulmaswatch/darkly/bulmaswatch.min.css';
import { Provider } from 'react-redux';
import { store } from './state';
import ReactDOM from 'react-dom';
import CodeCell from './components/code-cell';
import TextEditor from './components/text-editor';

const App = () => {

    return (
        <Provider store={store}>
            <div>
                <TextEditor />
            </div>
        </Provider>
    )
}



ReactDOM.render(<App />, document.querySelector('#root'))