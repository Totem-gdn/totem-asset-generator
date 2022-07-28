import { BodyFat, getRandomBodyFat } from './body-fat.enum';

const bodyFatValues = [BodyFat.Thin, BodyFat.Fat];

test('should generate random BodyFatEnum', () => {
  expect(bodyFatValues).toContain(getRandomBodyFat());
});
