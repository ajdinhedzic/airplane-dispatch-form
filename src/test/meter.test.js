const moxios = require('moxios');
const request = require('supertest');
const app = require('../main/app');
const { ksea, kfmy, ksfo } = require('./mockMetarResponse');

describe('Metar Parsing', function () {

    beforeEach(() => {
        moxios.install();
        moxios.stubRequest(/.*ksea*/, {
            stauts: 200,
            response: ksea
        });
    });

    afterEach(() => {
        moxios.uninstall();
    });

    it('should populate the airport', async function () {
        moxios.stubRequest('https://aviationweather.gov/adds/dataserver_current/httpparam?dataSource=metars&requestType=retrieve&format=xml&stationString=ksea&hoursBeforeNow=1', {
            stauts: 200,
            response: ksea
        });
        const actualResponse = await request(app).get('/api/airports/ksea/metar');
        const jsonResponse = JSON.parse(actualResponse.res.text);
        expect(jsonResponse.metar.station).toBe('KSEA')
    });

    it('should populate metar time', async function () {
        const response = await request(app).get('/api/airports/ksea/metar');
        expect(response.body.metar.time).toBe('14:53:00Z')
    });

    it('should populate metar time', async function () {
        const response = await request(app).get('/api/airports/ksea/metar');
        expect(response.body.metar.wind).toBe('80 @ 13 G 28 kt')
    });

    it('should populate visibiblity', async function () {
        const response = await request(app).get('/api/airports/ksea/metar');
        expect(response.body.metar.visibility).toBe('10.0')
    });

    it('should populate sky conditions', async function () {
        const response = await request(app).get('/api/airports/ksea/metar');
        expect(response.body.metar.skyCondition.length).toBe(3);
        expect(response.body.metar.skyCondition[0]).toBe('FEW 1000');
        expect(response.body.metar.skyCondition[1]).toBe('BKN 4000');
        expect(response.body.metar.skyCondition[2]).toBe('BKN 9000');
    });

    it('should populate sky conditions when sky is clear', async function () {
        moxios.stubRequest(/.*kfmy*/, {
            stauts: 200,
            response: kfmy
        });
        const response = await request(app).get('/api/airports/kfmy/metar');
        expect(response.body.metar.skyCondition).toBe('CLR');
    });
    
    it('should populate sky conditions when sky has one layer', async function () {
        moxios.stubRequest(/.*ksfo*/, {
            stauts: 200,
            response: ksfo
        });
        const response = await request(app).get('/api/airports/ksfo/metar');
        expect(response.body.metar.skyCondition).toBe('FEW 18000');
    });

    it('should populate temp', async function () {
        const response = await request(app).get('/api/airports/ksea/metar');
        expect(response.body.metar.temperature).toBe(9)
    });

    it('should populate dew point', async function () {
        const response = await request(app).get('/api/airports/ksea/metar');
        expect(response.body.metar.dewPoint).toBe(4)
    });

    it('should populate altimeter', async function () {
        const response = await request(app).get('/api/airports/ksea/metar');
        expect(response.body.metar.altimeter).toBe(29.88)
    });

    it('should populate flight category', async function () {
        const response = await request(app).get('/api/airports/ksea/metar');
        expect(response.body.metar.flightCategory).toBe('VFR')
    });
});
