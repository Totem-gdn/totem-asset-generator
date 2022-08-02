import { EnumUtils } from '../lib/enum-utils';

export enum Element {
  Air,
  Earth,
  Water,
  Fire,
}

export function getRandomElement(): Element {
  return EnumUtils.getRandomValue(Element);
}
