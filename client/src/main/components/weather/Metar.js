import React from 'react';
import MetarSearch from './MetarSearch';
import * as api from '../../request/api'

class Metar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { metar: '' }
    }

    fetchMetar = airport => {
        api.get(`/api/airports/${airport}/metar`)
            .then(response => this.setState({ metar: response.metar }))
    };

    render() {
        return (
            <div className="card">
                <div className="card-header">
                    {this.props.title}
                </div>
                <div className="card-body">
                    {this.state.metar === '' ?
                        <MetarSearch title={this.props.title} onSubmit={this.fetchMetar}/> : <p>{this.state.metar}</p>}
                </div>
            </div>)
    }
}

export default Metar;