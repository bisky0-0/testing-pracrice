export function reverseString([...str], reversed = []) {
    if (str.length == 0) return reversed.join('')
    reversed.push(str.pop())
    return reverseString(str, reversed)
}