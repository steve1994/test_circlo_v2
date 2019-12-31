const weather = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_WEATHER_FIVE_DAYS_SUCCESS':
            return action.weatherData;
        case 'LOAD_WEATHER_FIVE_DAYS_FAILURE':
        default:
            return state;
    }
}

export default weather;
