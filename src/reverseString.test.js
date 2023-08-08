
import { reverseString } from "./reverseString";

test('this string is reversed', () => {
    expect(reverseString('hello')).toEqual('olleh');
})