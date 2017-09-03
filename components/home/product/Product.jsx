import React, {Component} from 'react';

class Product extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid bg-3 text-center">
                    <h3>Some of my Work</h3><br/>
                    <div className="row">
                        <div className="col-sm-3">
                            <p>Some text..</p>
                            <img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive"
                                 alt="Image"/>
                        </div>
                        <div className="col-sm-3">
                            <p>Some text..</p>
                            <img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive"
                                 alt="Image"/>
                        </div>
                        <div className="col-sm-3">
                            <p>Some text..</p>
                            <img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive"
                                 alt="Image"/>
                        </div>
                        <div className="col-sm-3">
                            <p>Some text..</p>
                            <img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive"
                                 alt="Image"/>
                        </div>
                    </div>
                </div>
                <div className="container-fluid bg-3 text-center">
                    <div className="row">
                        <div className="col-sm-3">
                            <p>Some text..</p>
                            <img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive"
                                 alt="Image"/>
                        </div>
                        <div className="col-sm-3">
                            <p>Some text..</p>
                            <img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive"
                                 alt="Image"/>
                        </div>
                        <div className="col-sm-3">
                            <p>Some text..</p>
                            <img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive"
                                 alt="Image"/>
                        </div>
                        <div className="col-sm-3">
                            <p>Some text..</p>
                            <img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive"
                                 alt="Image"/>
                        </div>
                    </div>
                </div>
                <br/>
            </div>
        )
    }
}

module.exports = Product;