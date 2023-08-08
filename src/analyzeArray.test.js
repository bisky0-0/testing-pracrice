import { analyzeArray } from "./analyzeArray"

test('analyzed Array', () => {
    expect(analyzeArray([1, 2, 3, 4, 5])).toEqual(
        {
            average: 7,
            min: 1,
            max: 5,
            length: 5
        }
    )
})