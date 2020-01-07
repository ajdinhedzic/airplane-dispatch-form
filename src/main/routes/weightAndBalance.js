const n30543e = {
    name: 'PA28-181 Archer II',
    registration: 'N3053E',
    weightAndBalance: {
        weight: 1579,
        arm: 86.89,
        moment: 137248.21,
        stations: [
            {
                name: 'Front Passengers',
                arm: 80.5,
                weight: 0,
                moment: 0,
            },
            {
                name: 'Fuel',
                arm: 95,
                weight: 0,
                moment: 0,
            },
            {
                name: 'Rear Passengers',
                arm: 118.1,
                weight: 0,
                moment: 0,
            },
            {
                name: 'Baggage Compartment',
                arm: 142.8,
                weight: 0,
                moment: 0,
            }
        ]
    },
};

const n44526 = {
    name: 'PA28-151 Warrior',
    registration: 'N44526',
    weightAndBalance: {
        weight: 1462.7,
        arm: 87.37,
        moment: 127821.6,
        stations: [
            {
                name: 'Front Passengers',
                arm: 80.5,
                weight: 0,
                moment: 0,
            },
            {
                name: 'Fuel',
                arm: 95,
                weight: 0,
                moment: 0,
            },
            {
                name: 'Rear Passengers',
                arm: 118.1,
                weight: 0,
                moment: 0,
            },
            {
                name: 'Baggage Compartment',
                arm: 142.8,
                weight: 0,
            }
        ]
    },

};

const airplanes = [n30543e, n44526];

module.exports = airplanes;