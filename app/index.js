var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');
var Home = require('../components/home/Home');

class App extends React.Component {
    render() {
        return (
            <Home />
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);