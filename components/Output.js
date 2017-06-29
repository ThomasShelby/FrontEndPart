var React = require('react');

class Output extends React.Component {
    render () {
        return(
            <div>
                {this.props.output}
            </div>
        )
    }
}

module.exports = Output;