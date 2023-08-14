import Validator from '../validator';

test.each([
  ['a', true],
  ['б', false],
  ['a-s12ou_re', true],
  ['a-123ou_re', false],
  ['a-1234ou_re', false],
  ['a-12ou+re', false],
  ['аен-12ou_re', false],
  ['1a-s12ou_re', false],
  ['-a-s12ou_re', false],
  ['_a-s12ou_re', false],
  ['a-s12ou_re_', false],
  ['a-s12ou_re-', false],
  ['a-s12ou_re1', false],
  ['A', true],
  ['Б', false],
  ['a-s12Ou_re', true],
  ['a-123Ou_re', false],
  ['a-1234Ou_re', false],
  ['a-12ou+Re', false],
  ['аен-12ou_Re', false],
  ['1a-s12ou_Re', false],
  ['-a-s12ou_Re', false],
  ['_a-s12ou_Re', false],
  ['a-s12oU_re_', false],
  ['a-s12oU_re-', false],
  ['a-s12oU_re1', false],
])('validator "%s"', (name, result) => {
  expect(Validator.validateUsername(name)).toBe(result);
});
