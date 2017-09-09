import React, {Component} from 'react';
var Carousel = require('react-responsive-carousel').Carousel;
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

export default class MainCarousel extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Carousel autoPlay interval={3000} infiniteLoop transitionTime={1000} showThumbs={false}>
                <div style={{height: '450px', width: '100%'}}>
                    <img src="../pictures/1_flowers.jpg" alt="Flowers Image 1" />
                    <p className="legend">Here you can see amazing flowers</p>
                </div>
                <div style={{height: '450px', width: '100%'}}>
                    <img src="../pictures/2_flowers.jpg" alt="Flowers Image 2" />
                    <p className="legend">Every gardener wants to learn more about basic rose gardening: what’s the best soil; when and how often to water and fertilize; how to plant, prune and control rose garden pests. Here you’ll find selected articles about the basics as well as more advanced rose gardening topics.</p>
                </div>
                <div style={{height: '450px', width: '100%'}}>
                    <img src="../pictures/3_symbol.jpg" alt="Symbol Image" />
                    <p className="legend">Kalina is a national symbol of Ukraine</p>
                </div>
                <div style={{height: '450px', width: '100%'}}>
                    <img src="../pictures/4_tea_field.jpg" alt="Tea Field Image" />
                    <p className="legend">Tea is an aromatic beverage commonly prepared by pouring hot or boiling water over cured leaves of the Camellia sinensis, an evergreen shrub native to Asia. After water, it is the most widely consumed drink in the world. There are many different types of tea; some teas, like Darjeeling and Chinese greens, have a cooling, slightly bitter, and astringent flavour, while others have vastly different profiles that include sweet, nutty, floral or grassy notes.</p>
                </div>
                <div style={{height: '450px', width: '100%'}}>
                    <img src="../pictures/5_yacht.jpg" alt="Yacht Image" />
                    <p className="legend">Yachting refers to the use of recreational boats and ships called yachts for sporting purposes. Yachts are different from working ships mainly by their leisure purpose.</p>
                </div>
                <div style={{height: '450px', width: '100%'}}>
                    <img src="../pictures/mercedes-benz-e-class_w213.jpg" alt="mercedes-benz-e-class_w213" />
                    <p className="legend">The Mercedes-Benz E-Class (W213 and S213) series represent the fifth-generation of the Mercedes-Benz E-Class range of executive cars, including sedan (W213) and station wagon (S213) configurations. Sold from 2016 (as a 2017 model), it is the successor to the W212/S212 E-Class models. A high-performance E63 AMG version of the W213 and S213 has been available as well from 2016 (as a 2017 model).</p>
                </div>
                <div style={{height: '450px', width: '100%'}}>
                    <img src="../pictures/1097.jpg" alt="Image 1" />
                    <p className="legend">Legend 1</p>
                </div>
                <div style={{height: '450px', width: '100%'}}>
                    <img src="../pictures/1096.jpeg" alt="Image 2" />
                    <p className="legend">Legend 2</p>
                </div>
                <div style={{height: '450px', width: '100%'}}>
                    <img src="../pictures/1098.jpeg" alt="Image 3" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
}

module.exports = MainCarousel;