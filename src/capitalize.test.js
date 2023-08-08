import { capitalize } from "./capitalize"

test('the first letter of string is capitalized', () => {
    expect(capitalize('hello')).toEqual('Hello')
})