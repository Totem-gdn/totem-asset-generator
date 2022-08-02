import { EnumUtils } from '../lib/enum-utils';

export enum Sex {
  Male,
  Female,
}

export function getRandomSex(): Sex {
  return EnumUtils.getRandomValue(Sex);
}
