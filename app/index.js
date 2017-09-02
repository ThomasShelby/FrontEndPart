var React = require('react');
var ReactDOM = require('react-dom');
import MainStyle from 'MainStyle';
import Home from 'Home';

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