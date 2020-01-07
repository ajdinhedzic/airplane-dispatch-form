import React from 'react';
import { Station } from './Station';
import update from 'immutability-helper';
import { roundToTwoDecimalPlaces } from '../../util/Math';

class AirplaneWeightAndBalance extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            airplaneWeight: this.props.airplane.weightAndBalance.weight,
            arm: this.props.airplane.weightAndBalance.arm,
            totalMoment: this.props.airplane.weightAndBalance.moment,
            stations: this.props.airplane.weightAndBalance.stations
        }
    }

    update = (updatedStation) => {
        const index = this.state.stations.findIndex(station => station.name === updatedStation.name);
        this.setState({
            stations: update(this.state.stations, {
                [index]: { weight: { $set: updatedStation.weight }, moment: { $set: updatedStation.moment } }
            }),
        }, () => {
            this.setState({
                airplaneWeight: this.state.stations.reduce((a, b) => a + b.weight, this.props.airplane.weightAndBalance.weight),
                totalMoment: roundToTwoDecimalPlaces(this.state.stations.reduce((a, b) => a + b.moment, this.props.airplane.weightAndBalance.moment))
            }, () => {
                this.setState({
                    arm: roundToTwoDecimalPlaces(this.state.totalMoment / this.state.airplaneWeight)
                })
            })
        })
    };

    render() {
        return (
            <div className="table-responsive">
                <h2>{this.props.airplane.name}</h2>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Station</th>
                        <th>Weight</th>
                        <th>Arm</th>
                        <th>Moment</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Basic Empty Weight</td>
                        <td>{this.props.airplane.weightAndBalance.weight}</td>
                        <td>{this.props.airplane.weightAndBalance.arm}</td>
                        <td>{this.props.airplane.weightAndBalance.moment}</td>
                        <td></td>
                    </tr>
                    {this.state.stations.map(station => {
                        return <Station
                            data={station}
                            key={station.name}
                            update={this.update}
                        />
                    })}
                    <tr>
                        <td>Total:</td>
                        <td>{this.state.airplaneWeight}</td>
                        <td>{this.state.arm}</td>
                        <td>{this.state.totalMoment}</td>
                        <td></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default AirplaneWeightAndBalance;