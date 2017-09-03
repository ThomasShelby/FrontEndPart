import React, {Component} from 'react';

class Carousel extends Component {
    render() {
        return (
            <div id="productCarousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#productCarousel" data-slide-to="0" className="active"/>
                    <li data-target="#productCarousel" data-slide-to="1"/>
                    <li data-target="#productCarousel" data-slide-to="2"/>
                </ol>

                <div className="carousel-inner">
                    <div className="item active">
                        <img src="../pictures/1096.jpeg" alt="Image hasn't been found"/>
                        <div className="carousel-caption">
                            <h3>First product</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at aut cumque delectus
                                doloribus eligendi eos illo itaque laudantium natus nemo non, odit, perspiciatis quam
                                repellat reprehenderit vitae? Esse exercitationem facere nobis nulla quaerat? A ad alias
                                amet aspernatur aut consectetur consequatur corporis cum dicta dolor esse eveniet fugit
                                illo, labore perspiciatis repellendus tempora veritatis? Ab accusantium, cumque dolores
                                eos in iusto maiores mollitia necessitatibus placeat quam, quasi reiciendis repellat ut.
                                Dicta iure magni minima nam odit!</p>
                        </div>
                    </div>
                    <div className="item">
                        <img src="../pictures/1097.jpg" alt="Image hasn't been found"/>
                        <div className="carousel-caption">
                            <h3>Second product</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad at atque delectus
                                deleniti dicta distinctio dolores doloribus dolorum eos est, et excepturi explicabo
                                facere in inventore iusto libero necessitatibus nihil nobis obcaecati odit possimus
                                praesentium quaerat quo soluta tempore totam ullam velit voluptatibus! Ab animi,
                                architecto assumenda aut beatae dignissimos eligendi excepturi expedita facilis impedit
                                ipsam laboriosam maiores nesciunt officia quidem quis rerum sed ut voluptatibus?</p>
                        </div>
                    </div>
                    <div className="item">
                        <img src="../pictures/1098.jpeg" alt="Image hasn't been found"/>
                        <div className="carousel-caption">
                            <h3>Third product</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet at dolores non numquam
                                rem. Adipisci asperiores blanditiis, deserunt doloremque doloribus eum eveniet in minima
                                nam, nobis nostrum quidem quos repellendus saepe soluta suscipit temporibus! Assumenda
                                illum iste necessitatibus? Alias cumque dignissimos doloribus error excepturi facilis
                                magnam nesciunt nostrum perspiciatis quas vero vitae, voluptatem! Autem commodi debitis
                                in velit. Beatae deleniti eius eum fugiat inventore mollitia necessitatibus, odit sunt?
                                Dicta nam praesentium quam voluptate voluptates? Ab facilis id qui rem repellat,
                                rerum!</p>
                        </div>
                    </div>
                </div>

                <a className="left carousel-control" href="#productCarousel" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#productCarousel" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        )
    }
}

module.exports = Carousel;