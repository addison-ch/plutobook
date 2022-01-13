import 'bulmaswatch/darkly/bulmaswatch.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Provider } from 'react-redux';
import { store } from './state';
import ReactDOM from 'react-dom';
// import CodeCell from './components/code-cell';
// import TextEditor from './components/text-editor';
import CellList from './components/cell-list';
import './index.css'

const App = () => {

    return (
        <Provider store={store}>
            <div>

                <CellList /></div>
        </Provider>
    )
}



ReactDOM.render(<App />, document.querySelector('#root'))