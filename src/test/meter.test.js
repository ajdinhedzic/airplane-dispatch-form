const moxios = require('moxios');
const request = require('supertest');
const app = require('../main/app');
const { simpleMetar } = require('./mockMetarResponse');

describe('Metar Parsing', function () {

    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    it('should populate the airport', async function () {
        moxios.stubRequest('https://aviationweather.gov/adds/dataserver_current/httpparam?dataSource=metars&requestType=retrieve&format=xml&stationString=ksea&hoursBeforeNow=1', {
            stauts: 200,
            response: simpleMetar
        });
        const actualResponse = await request(app).get('/api/airports/ksea/metar');
        const jsonResponse = JSON.parse(actualResponse.res.text);
        expect(jsonResponse.metar.station).toBe('KSEA')
    });

    it('should populate metar time', async function () {
        moxios.stubRequest('https://aviationweather.gov/adds/dataserver_current/httpparam?dataSource=metars&requestType=retrieve&format=xml&stationString=ksea&hoursBeforeNow=1', {
            stauts: 200,
            response: simpleMetar
        });
        const response = await request(app).get('/api/airports/ksea/metar');
        expect(response.body.metar.time).toBe('14:53:00Z')
    });
});
