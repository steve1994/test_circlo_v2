import axios from 'axios';

const APP_ID = '271da6b323b05ebaf2b4aaa0f3378f89';
const API_URL = 'http://api.openweathermap.org/'
const request = axios.create({
    baseURL: API_URL,
    timeout: 1000
})

export const loadWeatherSuccess = (weatherData) => ({
    type: 'LOAD_WEATHER_FIVE_DAYS_SUCCESS',
    weatherData
})

export const loadWeatherFailure = () => ({
    type: 'LOAD_WEATHER_FIVE_DAYS_FAILURE'
})

export const loadWeather = (cityID) => {
    return dispatch => {
        return request.get(`data/2.5/forecast`,{
            params: {
                id : `${cityID}`,
                appid : APP_ID,
                cnt : 5,
                units : 'metric'
            }
        })
        .then(function (response) {
            dispatch(loadWeatherSuccess(response.data.list));
        })
        .catch(function (error) {
            console.error(error);
            dispatch(loadWeatherFailure());
        })
    }
}
