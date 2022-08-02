import { EnumUtils } from '../lib/enum-utils';

export enum HairStyle {
  Afro,
  Asymmetrical,
  Braids,
  BuzzCut,
  Dreadlocks,
  Long,
  Ponytail,
  Short,
}

export function getRandomHairStyle(): HairStyle {
  return EnumUtils.getRandomValue(HairStyle);
}
