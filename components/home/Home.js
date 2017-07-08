var React = require('react');
var ReactDOM = require('react-dom');
var Carousel = require('./carousel/Carousel');
var Header = require('./header/Header');
var Product = require('./product/Product');
var Footer = require('./footer/Footer');


class Home extends React.Component {
    render() {
        return (
            <div>
                <Carousel/>
                <Header/>
                <Product/>
                <Footer/>
            </div>
        )
    }
}

module.exports = Home;