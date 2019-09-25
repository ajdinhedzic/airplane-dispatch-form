import React from 'react';
import { shallow } from 'enzyme';
import Metar from '../../../main/components/weather/Metar';
import * as api from '../../../main/request/api';

describe('Metar component', function () {

    it('should add title prop to card header', function () {
        const expectedTitle = 'Destination';
        const wrapper = shallow(<Metar title={expectedTitle}/>);
        expect(wrapper.find('.card-header').text()).toBe(expectedTitle);
    });

    describe('API call', function () {
        it('should send an API call to on submit', async function () {
            api.get = jest.fn();
            api.get.mockReturnValue(Promise.resolve());
            const wrapper = shallow(<Metar title=''/>);
            await wrapper.instance().fetchMetar('kamw');
            expect(api.get).toHaveBeenCalledWith('/api/airports/kamw/metar')
        });
    });
});