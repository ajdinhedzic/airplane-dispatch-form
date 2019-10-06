import React from 'react';
import { shallow } from 'enzyme';
import Metar from '../../../main/components/weather/Metar';
import * as api from '../../../main/request/api';
import { MetarResult } from '../../../main/components/weather/MetarResult';

describe('Metar component', function () {

    describe('API call', function () {
        it('should send an API call to on submit', async function () {
            api.get = jest.fn();
            api.get.mockReturnValue(Promise.resolve());
            const wrapper = shallow(<Metar title=''/>);
            await wrapper.instance().fetchMetar('kamw');
            expect(api.get).toHaveBeenCalledWith('/api/airports/kamw/metar')
        });
    });

    it('should add title prop to card header', function () {
        const expectedTitle = 'Destination';
        const wrapper = shallow(<Metar title={expectedTitle}/>);
        expect(wrapper.find('.card-header').text()).toBe(expectedTitle);
    });

    it('should not render a Metar Result when state metar empty', function () {
        const wrapper = shallow(<Metar title={''}/>);
        expect(wrapper.find(MetarResult).length).toBe(0);
    });
});