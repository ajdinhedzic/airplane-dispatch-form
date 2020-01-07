import React from 'react';
import AirplaneWeightAndBalance from '../../../main/components/weightAndBalance/AirplaneWeightAndBalance';
import { shallow } from 'enzyme';

describe('Weight and balance', () => {
    let airplane = {
        weightAndBalance: {
            weight: 2500,
            arm: 20,
            moment: 50000,
            stations: [
                {
                    name: 'Baggage Compartment',
                    weight: 0,
                    arm: 50,
                    moment: 0,
                },
                {
                    name: 'Front Passengers',
                    weight: 0,
                    arm: 10,
                    moment: 0,
                }
            ]
        }
    };

    it('should update the station in state with weight and moment', function () {
        const wrapper = shallow(<AirplaneWeightAndBalance airplane={airplane}/>);
        wrapper.instance().update({ name: 'Front Passengers', weight: 50, moment: 500 });
        expect(wrapper.state('stations')[1].weight).toBe(50);
        expect(wrapper.state('stations')[1].moment).toBe(500);
    });

    it('should display total weight as airplane weight plus sum of all station weight', function () {
        const wrapper = shallow(<AirplaneWeightAndBalance airplane={airplane}/>);
        wrapper.instance().update({ name: 'Front Passengers', weight: 300, moment: 2500 });
        wrapper.instance().update({ name: 'Baggage Compartment', weight: 200, moment: 2500 });
        expect(wrapper.state('airplaneWeight')).toBe(3000);
    });

    it('should display total moment as airplane empty moment plus sum of all station moment', function () {
        const wrapper = shallow(<AirplaneWeightAndBalance airplane={airplane}/>);
        wrapper.instance().update({ name: 'Front Passengers', weight: 300, moment: 2500 });
        wrapper.instance().update({ name: 'Baggage Compartment', weight: 200, moment: 2500 });
        expect(wrapper.state('totalMoment')).toBe(55000);
    });

    it('should calculate arm to be moment / weight', function () {
        airplane.weightAndBalance.weight = 1579;
        airplane.weightAndBalance.moment = 137248.21;
        const wrapper = shallow(<AirplaneWeightAndBalance airplane={airplane}/>);
        wrapper.instance().update({ name: 'Front Passengers', weight: 300, moment: 24150.00 });
        expect(wrapper.state('arm')).toBe(85.90);
    });

    it('should round total moment to at most two decimal places', function () {
        airplane = {
            weightAndBalance: {
                weight: 1462.7,
                arm: 87.37,
                moment: 127821.6,
                stations: [
                    {
                        name: 'Baggage Compartment',
                        weight: 55,
                        arm: 95,
                        moment: 5225,
                    },
                    {
                        name: 'Front Passengers',
                        weight: 12,
                        arm: 118.1,
                        moment: 1417.2,
                    }
                ]
            }
        }
        const wrapper = shallow(<AirplaneWeightAndBalance airplane={airplane}/>);
        wrapper.instance().update({ name: 'Front Passengers', weight: 12, moment: 1417.2 });
        expect(wrapper.state('totalMoment')).toBe(134463.8);
    });
});