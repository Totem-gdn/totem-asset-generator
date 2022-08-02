import { EnumUtils } from '../lib/enum-utils';

export enum TipMaterial {
  Wood,
  Bone,
  Flint,
  Obsidian,
}

export function getRandomTipMaterial(): TipMaterial {
  return EnumUtils.getRandomValue(TipMaterial);
}
