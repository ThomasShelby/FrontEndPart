import React, {Component} from 'react';
import MainCarousel from 'MainCarousel';
import Header from 'Header';
import Product from 'Product';
import Footer from 'Footer';

class Home extends Component {
    render() {
        return (
            <div>
                <MainCarousel/>
                <Header/>
                <Product/>
                <Footer/>
            </div>
        )
    }
}

module.exports = Home;