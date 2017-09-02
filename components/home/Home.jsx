import React, {Component} from 'react';
import Carousel from 'Carousel';
import Header from 'Header';
import Product from 'Product';
import Footer from 'Footer';

class Home extends Component {
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