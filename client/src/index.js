import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/*ReactDOM.render(<App />, document.getElementById('root'));*/
class Bonjour extends React.Component{
        render() {
            return (
                <div>
                    <h1>Bonjour de Réact</h1>
                </div>
            )
        }
}
//babel-standlone made for non-node projects, jsx is already integrated here
ReactDOM.render(<Bonjour/>,  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
