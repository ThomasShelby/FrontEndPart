import React, {Component} from 'react';
import FixedHeaderStyle from 'FixedHeaderStyle';

class Header extends Component {
    render () {
        return (
            <div>
                <nav className="navbar navbar-inverse" data-spy="affix" data-offset-top="450">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">Elect</a>
                        </div>
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="#">All users</a></li>
                            <li><a href="#">My account</a></li>
                            <li><a href="#">Page 2</a></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                            <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

module.exports = Header;