import { EnumUtils } from '../lib/enum-utils';

export enum BodyFat {
  Thin,
  Fat,
}

export function getRandomBodyFat(): BodyFat {
  return EnumUtils.getRandomValue(BodyFat);
}
