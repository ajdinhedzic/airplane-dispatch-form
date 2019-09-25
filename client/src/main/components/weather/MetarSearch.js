import React from 'react';

class MetarSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = { airport: '' }
    }

    submit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.airport);
    };

    handleInputChange = (event) => {
        this.setState({ airport: event.target.value });
    };

    render() {
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="departureAirport">Enter {this.props.title} Airport:</label>
                    <input
                        className="form-control"
                        id="departureAirport"
                        placeholder="example: KAMW"
                        value={this.state.airport}
                        onChange={this.handleInputChange}/>
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={this.submit}>Submit
                </button>
            </form>

        )
    }
}

export default MetarSearch;