const sum = require('../index');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
test('adds 2+"he"',()=>{ 

  expect(sum(2, 'he')).toEqual("2he")
})
