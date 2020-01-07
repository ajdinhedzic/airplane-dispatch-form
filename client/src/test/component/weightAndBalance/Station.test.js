import React from 'react';
import { Station } from '../../../main/components/weightAndBalance/Station';
import { shallow } from 'enzyme';

describe('Station test', function () {
    let stationData = {
        name: 'any',
        weight: 0,
        arm: 10,
        moment: 100,
    };

    it('should set the moment to prop moment', function () {
        const wrapper = shallow(<Station data={stationData} update={jest.fn()}/>);
        wrapper.find('input').simulate('change', { target: { id: 'weight', value: '50' } });
        wrapper.find('button').simulate('click');
        expect(wrapper.find('.moment').text()).toBe('100');
    });

    it('should call update when save button is clicked', function () {
        const mockUpdate = jest.fn();
        const wrapper = shallow(<Station data={stationData} update={mockUpdate}/>);
        wrapper.find('input').simulate('change', { target: { id: 'weight', value: '12' } });
        wrapper.find('button').simulate('click');
        expect(mockUpdate).toHaveBeenCalledWith({
            name: 'any',
            weight: 12,
            moment: 120
        });
    });

    it('should round moment to two decimal places', function () {
        stationData.arm = 118.1;
        const mockUpdate = jest.fn();
        const wrapper = shallow(<Station data={stationData} update={mockUpdate}/>);
        wrapper.find('input').simulate('change', { target: { id: 'weight', value: '121' } });
        wrapper.find('button').simulate('click');
        expect(mockUpdate).toHaveBeenCalledWith({
            name: 'any',
            weight: 121,
            moment: 14290.1
        });
    });
});