export function caesarCipher([...str], cipheredStr = []) {
    if (str.length == 0) return cipheredStr.join('')
    cipheredStr.push(str.pop(), str.shift())
    return caesarCipher(str, cipheredStr)
}