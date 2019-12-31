import React from 'react';
import TableTemperature from './TableTemperature';

export default class Index extends React.Component {

    constructor(props) {
        super(props);
        this.state = {country : ""};
        this.handleCityChange = this.handleCityChange.bind(this);
    }

    handleCityChange(e) {
        this.setState({country:e.target.value});
    }

    render() {
        return (
            <div>
                <h3>Weather Application</h3>
                <label>
                    Pick your city: &nbsp;&nbsp;
                    <select value={this.state.country} onChange={this.handleCityChange}>
                        <option value="">----Choose City----</option>
                        <option value="jkt">Jakarta</option>
                        <option value="bk">Bangkok</option>
                        <option value="sg">Singapore</option>
                        <option value="mn">Manilla</option>
                    </select>
                </label>
                <br /><br />
                <TableTemperature city={this.state.country} />
            </div>
        );
    }

}
