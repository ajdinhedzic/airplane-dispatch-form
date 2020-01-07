import { roundToTwoDecimalPlaces } from '../../../main/util/Math';

describe('Rounding', function () {
    it('should round to two decimal places', function () {
        expect(roundToTwoDecimalPlaces(100.55000001)).toBe(100.55);
        expect(roundToTwoDecimalPlaces(100.556)).toBe(100.56);
    });
});