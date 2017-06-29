var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');
var Output = require('../components/Output');

//state
//lifecycle
//UI

class App extends React.Component {
    render() {
        return (
            <Output output="Hello world"/>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);