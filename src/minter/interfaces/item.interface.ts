import { Element } from '../enums/element.enum';
import { TipMaterial } from '../enums/tip-material.enum';
import { Color } from '../lib/color-utils';

export interface IItem {
  tipMaterial: TipMaterial;
  element: Element;
  shaftColor: Color;
  range: number;
  damage: number;
}
