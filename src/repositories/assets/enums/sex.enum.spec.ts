import { getRandomSex, Sex } from './sex.enum';

const sexValues = [Sex.Male, Sex.Female];

test('should generate random SexEnum', () => {
  expect(sexValues).toContain(getRandomSex());
});
