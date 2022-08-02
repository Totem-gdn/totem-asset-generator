import { getRandomItemType, ItemType } from './item-type.enum';

const itemTypeValues = [ItemType.Spear, ItemType.Sword];

test('should generate random ItemTypeEnum', () => {
  expect(itemTypeValues).toContain(getRandomItemType());
});
