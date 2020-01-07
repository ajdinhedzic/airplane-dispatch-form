import React from 'react';
import * as api from '../../request/api'
import AirplaneWeightAndBalance from './AirplaneWeightAndBalance';

class WeightAndBalance extends React.Component {
    constructor(props) {
        super(props);
        this.state = { airplanes: [], selectedAirplane: {} }
    }

    componentDidMount() {
        return api.get('/api/airplanes')
            .then(response => {
                this.setState({ airplanes: response.airplanes })
            })
    }

    selectAirplane = (event) => {
        const airplane = this.state.airplanes
            .find(airplane =>
                airplane.registration === event.target.innerText.trim());
        this.setState({ selectedAirplane: airplane });
    };

    render() {
        return (
            <div className='card w-100'>
                <div className='card-header'>
                    <div className='row'>
                        Weight and Balance
                    </div>
                </div>
                <div className='card-body'>
                    <div className='row'>
                        <div className='dropdown'>
                            <button className='btn btn-secondary dropdown-toggle' type='button' id='dropdownMenuButton'
                                    data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                                Select an airplane
                            </button>
                            <div className='dropdown-menu' aria-labelledby='dropdownMenuButton'>
                                {this.state.airplanes.map(airplane => {
                                    return <a className='dropdown-item'
                                              key={airplane.name}
                                              onClick={this.selectAirplane}>{airplane.registration}</a>
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {Object.entries(this.state.selectedAirplane).length !== 0
                        && <AirplaneWeightAndBalance airplane={this.state.selectedAirplane}/>}
                    </div>
                </div>
            </div>
        )
    }
}

export default WeightAndBalance;