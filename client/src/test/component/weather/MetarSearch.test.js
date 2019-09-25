import React from 'react';
import { shallow } from 'enzyme';
import MetarSearch from '../../../main/components/weather/MetarSearch';

describe('Metar Search', function () {
    it('should render an input field with submit button on page load', function () {
        const wrapper = shallow(<MetarSearch/>);
        expect(wrapper.find('input').length).toBe(1);
        expect(wrapper.find('button').length).toBe(1);
    });

    it('should call onSubmit prop when button is clicked', function () {
        const mockOnSubmit = jest.fn();
        const wrapper = shallow(<MetarSearch onSubmit={mockOnSubmit}/>);
        wrapper.find('input').simulate('change', { target: { id: 'departureAirport', value: 'KDSM' } });
        wrapper.find('button').simulate('click', { preventDefault: jest.fn() });
        expect(mockOnSubmit).toHaveBeenCalledWith('KDSM')
    });

    it('should call prevent default on submit', function () {
        const mockPreventDefault = jest.fn();
        const wrapper = shallow(<MetarSearch onSubmit={jest.fn()}/>);
        wrapper.find('button').simulate('click', { preventDefault: mockPreventDefault });
        expect(mockPreventDefault).toHaveBeenCalled();
    });
});