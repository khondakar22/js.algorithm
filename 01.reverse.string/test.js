const reverseString = require('./index');

test('Reverse function exists', () => {
  expect(reverseString).toBeDefined();
});

test('Reverse reverses a string', () => {
  expect(reverseString('abcd')).toEqual('dcba');
});

test('Reverse reverses a string', () => {
  expect(reverseString('cat')).toEqual('tac');
});

test('Reverse reverses a string', () => {
  expect(reverseString('  abcd')).toEqual('dcba  ');
});