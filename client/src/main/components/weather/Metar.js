import React from 'react';
import MetarSearch from './MetarSearch';
import * as api from '../../request/api'
import { MetarResult } from './MetarResult';

class Metar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { metar: {} }
    }

    fetchMetar = airport => {
        api.get(`/api/airports/${airport}/metar`)
            .then(response => this.setState({ metar: response.metar }))
    };

    renderMetar = () => {
        if (Object.entries(this.state.metar).length === 0) {
            return <MetarSearch title={this.props.title} onSubmit={this.fetchMetar}/>
        }
        return <span>
            <MetarResult metar={this.state.metar}/>
            <button
                className='btn btn-danger'
                onClick={() => this.setState({ metar: {} })}
            >Reset</button>
        </span>
    };

    render() {
        return (
            <div className="card">
                <div className="card-header">
                    {this.props.title}
                </div>
                <div className="card-body">
                    {this.renderMetar()}
                </div>
            </div>)
    }
}

export default Metar;