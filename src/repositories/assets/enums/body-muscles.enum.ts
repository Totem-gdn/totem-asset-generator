import { EnumUtils } from '../lib/enum-utils';

export enum BodyMuscles {
  Wimp,
  Muscular,
}

export function getRandomBodyMuscles(): BodyMuscles {
  return EnumUtils.getRandomValue(BodyMuscles);
}
