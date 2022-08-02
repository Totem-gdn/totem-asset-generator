import { getRandomHairStyle, HairStyle } from './hair-style.enum';

const hairStyleValues = [
  HairStyle.Afro,
  HairStyle.Asymmetrical,
  HairStyle.Braids,
  HairStyle.BuzzCut,
  HairStyle.Dreadlocks,
  HairStyle.Long,
  HairStyle.Ponytail,
  HairStyle.Short,
];

test('should generate random HairStyleEnum', () => {
  expect(hairStyleValues).toContain(getRandomHairStyle());
});
