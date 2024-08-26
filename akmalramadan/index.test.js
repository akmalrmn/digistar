const gcd = require('./index');

test('gcd of 48 and 18 should be 6', () => {
    expect(gcd(48, 18)).toBe(6);
});

test('gcd of 101 and 10 should be 1', () => {
    expect(gcd(101, 10)).toBe(1);
});

test('gcd of 0 and 5 should be 5', () => {
    expect(gcd(0, 5)).toBe(5);
});

test('gcd of 5 and 0 should be 5', () => {
    expect(gcd(5, 0)).toBe(5);
});