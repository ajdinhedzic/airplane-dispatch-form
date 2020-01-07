import React from 'react';
import WeightAndBalance from '../../../main/components/weightAndBalance/WeightAndBalance';
import { shallow } from 'enzyme';
import * as api from '../../../main/request/api';
import AirplaneWeightAndBalance from '../../../main/components/weightAndBalance/AirplaneWeightAndBalance';

describe('Weight and Balance', function () {

    let airplanes = [
        { registration: 'N11', name: 'Cessna Skyhawk' },
        { registration: 'N99', name: 'Piper Archer' }
    ];

    it('should make a call to /api/airplanes on component load', async function () {
        api.get = jest.fn();
        api.get.mockReturnValue(Promise.resolve({ airplanes }));
        const wrapper = await shallow(<WeightAndBalance/>);
        expect(wrapper.state('airplanes')).toBe(airplanes);
    });

    it('should render a dropdown item for reach airplane in state', async function () {
        api.get = jest.fn();
        api.get.mockReturnValue(Promise.resolve({ airplanes }));
        const wrapper = await shallow(<WeightAndBalance/>);
        expect(wrapper.find('.dropdown-item').length).toBe(2);
    });

    it('should render an airplane weight and balance component when selected from dropdown ', async function () {
        api.get = jest.fn();
        api.get.mockReturnValue(Promise.resolve({ airplanes }));
        const wrapper = await shallow(<WeightAndBalance/>);
        wrapper.setState({ selectedAirplane: airplanes[0] });
        expect(wrapper.find(AirplaneWeightAndBalance).props().airplane).toBe(airplanes[0]);
    });
});