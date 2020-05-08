import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/*ReactDOM.render(<App />, document.getElementById('root'));*/
const Bonjour = ({message, version}) => (
    <div id="title">
        <h1 className="heading">{message}</h1>
        <p>Vous apprenez la version {version}</p>
    </div>
)

class BonjourClass extends React.Component {
    render() {
        return (
            <div id="title">
                <h1 className="heading">{this.props.message}</h1>
                <p>Vous apprenez la version {this.props.version}</p>
            </div>
        )
    }
}

//babel-standlone made for non-node projects, jsx is already integrated here
ReactDOM.render(<Bonjour message="Bonjour de Réact 16" version={16}/>,  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
