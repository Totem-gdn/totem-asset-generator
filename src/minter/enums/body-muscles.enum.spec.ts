import { getRandomBodyMuscles, BodyMuscles } from './body-muscles.enum';

const bodyMuscleValues = [BodyMuscles.Wimp, BodyMuscles.Muscular];

test('should generate random BodyMusclesEnum', () => {
  expect(bodyMuscleValues).toContain(getRandomBodyMuscles());
});
