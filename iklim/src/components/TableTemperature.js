import React from 'react';
import * as cityCode from '../utils/cityCode';
import {loadWeather} from '../action';
import {connect} from 'react-redux'

class TableTemperature extends React.Component {

    componentDidUpdate() {
        if (this.props.city == 'jkt') {
            this.props.loadWeather(cityCode.cityCodeJakarta);
        } else if (this.props.city == 'bk') {
            this.props.loadWeather(cityCode.cityCodeBangkok);
        } else if (this.props.city == 'sg') {
            this.props.loadWeather(cityCode.cityCodeSingapore);
        } else if (this.props.city == 'mn') {
            this.props.loadWeather(cityCode.cityCodeManila);
        }
    }

    calculateAverage(arrayNumber) {
        let sum = 0;
        for (let i=0;i<arrayNumber.length;i++) {
            sum += parseFloat(arrayNumber[i]);
        }
        return (sum / arrayNumber.length).toFixed(2);
    }

    convertUTCDateToString(utcDate) {
        let year = utcDate.getUTCFullYear();
        let month = utcDate.getUTCMonth() + 1;
        let date = utcDate.getUTCDate();
        if (month.length < 2) {
            month = '0' + month;
        }
        if (date.length < 2) {
            date = '0' + date;
        }
        return year + '-' + month + '-' + date;
    }

    render() {
        let city;
        switch (this.props.city) {
            case 'jkt': city = 'Jakarta'; break;
            case 'bk': city = 'Bangkok'; break;
            case 'sg': city = 'Singapore'; break;
            case 'mn': city = 'Manila'; break;
            default : city = 'No city selected'; break;
        }
        let arrayTemp = [];
        let arrayTempDiff = [];
        let weathers = this.props.weather.map((item) => {
            let date = this.convertUTCDateToString(new Date(item.dt * 1000));
            let temperature = (item.main.temp).toFixed(2);
            arrayTemp.push(temperature);
            let temperatureDiff = (item.main.temp_max - item.main.temp_min).toFixed(2);
            arrayTempDiff.push(temperatureDiff);
            return (
                <tr>
                    <td>{date}</td>
                    <td>{temperature+'C'}</td>
                    <td>{temperatureDiff+'C'}</td>
                </tr>
            )
        })
        return (
            <table border="1">
                <thead>
                    <th>{city}</th>
                    <th>Suhu</th>
                    <th>Perbedaan</th>
                </thead>
                <tbody>
                    {weathers}
                    <tr>
                        <td><strong>Rata-Rata</strong></td>
                        <td><strong>{this.calculateAverage(arrayTemp)+'C'}</strong></td>
                        <td><strong>{this.calculateAverage(arrayTempDiff)+'C'}</strong></td>
                    </tr>
                </tbody>
            </table>
        )
    }

}

const mapStateToProps = (state) => ({
    weather : state.weather
})

const mapDispatchToProps = (dispatch) => ({
    loadWeather : (cityID) => (dispatch(loadWeather(cityID)))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (TableTemperature);
