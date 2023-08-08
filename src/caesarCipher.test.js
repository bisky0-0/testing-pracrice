import { caesarCipher } from "./caesarCipher";

test('this string is ciphered', () => {
    expect(caesarCipher('hello')).toBe('ohlel');
})