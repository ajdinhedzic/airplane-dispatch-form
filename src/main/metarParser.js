const api = require('./request');
const parseString = require('xml2js').parseString;

fetchWeatherFor = async (airport) => {
    const metarEndpoint = `https://aviationweather.gov/adds/dataserver_current/httpparam?dataSource=metars&requestType=retrieve&format=xml&stationString=${airport}&hoursBeforeNow=1`;
    const response = await api.get(metarEndpoint);


    let metar = {};
    parseString(response.data, { explicitArray: false }, (err, result) => {
        const parsedMetar = pickLatestMetarFrom(result);
        metar = {
            metar: {
                station: parsedMetar.station_id,
                time: parsedMetar.observation_time.split('T')[1],
                wind: extractWindDataFrom(parsedMetar),
                visibility: parsedMetar.visibility_statute_mi,
                skyCondition: extractSkyConditionFrom(parsedMetar),
                temperature: Math.round(parsedMetar.temp_c),
                dewPoint: Math.round(parsedMetar.dewpoint_c),
                altimeter: Math.round(parsedMetar.altim_in_hg * 100) / 100,
                flightCategory: parsedMetar.flight_category
            }
        }
    });

    return metar;
};

pickLatestMetarFrom = result => {
    if (Array.isArray(result.response.data.METAR)) {
        return result.response.data.METAR[0];
    }
    return result.response.data.METAR;
};

extractWindDataFrom = metar => {
    let wind = metar.wind_dir_degrees + ' @ ' + metar.wind_speed_kt;
    if (metar.wind_gust_kt !== undefined) {
        wind += ' G ' + metar.wind_gust_kt;
    }
    return wind + ' kt'
};

extractSkyConditionFrom = metar => {
    if (metar.sky_condition.length > 1) {
        return metar.sky_condition.map(clouds => {
            return `${clouds.$.sky_cover} ${clouds.$.cloud_base_ft_agl}`
        });
    }
    return metar.sky_condition.$.sky_cover === 'CLR' ? 'CLR' : `${metar.sky_condition.$.sky_cover} ${metar.sky_condition.$.cloud_base_ft_agl}`;

};

exports.fetchWeatherFor = fetchWeatherFor;