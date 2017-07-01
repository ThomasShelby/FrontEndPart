var React = require('react');
var ReactDOM = require('react-dom');
var Carousel = require('./carousel/Carousel');


class Home extends React.Component {
    render() {
        return (
            <Carousel/>
        )
    }
}

module.exports = Home;