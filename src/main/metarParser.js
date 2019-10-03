const api = require('./request');
const parseString = require('xml2js').parseString;

fetchWeatherFor = async (airport) => {
    const metarEndpoint = `https://aviationweather.gov/adds/dataserver_current/httpparam?dataSource=metars&requestType=retrieve&format=xml&stationString=${airport}&hoursBeforeNow=1`;
    const response = await api.get(metarEndpoint);


    let metar = {};
    parseString(response.data, { explicitArray: false }, (err, result) => {
        const parsedMetar = result.response.data.METAR;
        metar = {
            metar: {
                station: parsedMetar.station_id,
                time: parsedMetar.observation_time.split('T')[1]
            }
        }
    });

    return metar;
}

exports.fetchWeatherFor = fetchWeatherFor;