import { calculatePercentage } from "./functions";

describe('Testing calculate percentage rightly', () => {
    it('should calculate percentage negative 50.00', () => {
        const mock = {
            positive: 10,
            negative: 10
        }
        const result = calculatePercentage(mock);
        expect(result.negative).toEqual(50.00);
    });

    it('should calculate percentage positive 100', () => {
        const mock = {
            positive: 1,
            negative: 0
        }
        const result = calculatePercentage(mock);
        expect(result.positive).toEqual(100);
    });
    it('should calculate percentage negative 83.33', () => {
        const mock = {
            positive: 1,
            negative: 5
        }
        const result = calculatePercentage(mock);
        expect(result.negative).toEqual(83.33);
    });

    it('should calculate percentage both 0', () => {
        const mock = {
            positive: 0,
            negative: 0
        }
        const result = calculatePercentage(mock);
        expect(result.negative).toEqual(0);
        expect(result.positive).toEqual(0);
    });

})



