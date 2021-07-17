module.exports = function reverse(n) {
    if (n < 0) {
        n = -n
    }
    let arr = [...n + ''].map(n => +n);
    return +arr.reverse().join('');
}