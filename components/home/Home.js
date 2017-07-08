var React = require('react');
var ReactDOM = require('react-dom');
var Carousel = require('./carousel/Carousel');
var Header = require('./header/Header');


class Home extends React.Component {
    render() {
        return (
            <div>
                <Carousel/>
                <Header/>
            </div>
        )
    }
}

module.exports = Home;