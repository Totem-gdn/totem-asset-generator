import { EnumUtils } from '../lib/enum-utils';

export enum ItemType {
  Spear = 'spear',
  Sword = 'sword',
}

export function getRandomItemType(): ItemType {
  return EnumUtils.getRandomValue(ItemType);
}
