import { Element, getRandomElement } from './element.enum';

const elementValues = [Element.Air, Element.Earth, Element.Water, Element.Fire];

test('should generate random ElementEnum', () => {
  expect(elementValues).toContain(getRandomElement());
});
