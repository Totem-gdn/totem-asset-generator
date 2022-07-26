import { ItemType } from '../../enums/item-type.enum';
import { TipMaterial } from '../../enums/tip-material.enum';
import { Element } from '../../enums/element.enum';
import { ItemEntity } from '../item.entity';

const shaftColor1 = '#256D7B';
const shaftColor2 = '#c81d4a';
const shaftColor3 = '#6474b7';
const shaftColor4 = '#936529';
const shaftColor5 = '#f99595';
const shaftColor6 = '#7a7a30';
const shaftColor7 = '#91e676';
const shaftColor8 = '#bf6345';
const shaftColor9 = '#93b71e';
const shaftColor10 = '#d7668d';
const shaftColor11 = '#7ab1f7';
const shaftColor12 = '#9c96a6';
const shaftColor13 = '#c899e4';
const shaftColor14 = '#d1d21e';
const shaftColor15 = '#9acaa1';
const shaftColor16 = '#6b0734';

export const swords = [
  new ItemEntity({
    type: ItemType.Sword,
    tipMaterial: TipMaterial.Bone,
    element: Element.Water,
    shaftColor: shaftColor1,
    range: 10.0,
    damage: 51.25,
  }),
  new ItemEntity({
    type: ItemType.Sword,
    tipMaterial: TipMaterial.Flint,
    element: Element.Fire,
    shaftColor: shaftColor2,
    range: 10.0,
    damage: 84.74,
  }),
  new ItemEntity({
    type: ItemType.Sword,
    tipMaterial: TipMaterial.Wood,
    element: Element.Earth,
    shaftColor: shaftColor3,
    range: 10.0,
    damage: 45.29,
  }),
  new ItemEntity({
    type: ItemType.Sword,
    tipMaterial: TipMaterial.Obsidian,
    element: Element.Air,
    shaftColor: shaftColor4,
    range: 10.0,
    damage: 37.52,
  }),
  new ItemEntity({
    type: ItemType.Sword,
    tipMaterial: TipMaterial.Wood,
    element: Element.Water,
    shaftColor: shaftColor5,
    range: 10.0,
    damage: 70.22,
  }),
  new ItemEntity({
    type: ItemType.Sword,
    tipMaterial: TipMaterial.Wood,
    element: Element.Earth,
    shaftColor: shaftColor6,
    range: 10.0,
    damage: 72.02,
  }),
  new ItemEntity({
    type: ItemType.Sword,
    tipMaterial: TipMaterial.Wood,
    element: Element.Earth,
    shaftColor: shaftColor7,
    range: 10.0,
    damage: 75.14,
  }),
  new ItemEntity({
    type: ItemType.Sword,
    tipMaterial: TipMaterial.Flint,
    element: Element.Water,
    shaftColor: shaftColor8,
    range: 10.0,
    damage: 46.34,
  }),
  new ItemEntity({
    type: ItemType.Sword,
    tipMaterial: TipMaterial.Wood,
    element: Element.Air,
    shaftColor: shaftColor9,
    range: 10.0,
    damage: 43.9,
  }),
  new ItemEntity({
    type: ItemType.Sword,
    tipMaterial: TipMaterial.Wood,
    element: Element.Fire,
    shaftColor: shaftColor10,
    range: 10.0,
    damage: 53.23,
  }),
  new ItemEntity({
    type: ItemType.Sword,
    tipMaterial: TipMaterial.Bone,
    element: Element.Earth,
    shaftColor: shaftColor11,
    range: 10.0,
    damage: 44.13,
  }),
  new ItemEntity({
    type: ItemType.Sword,
    tipMaterial: TipMaterial.Obsidian,
    element: Element.Air,
    shaftColor: shaftColor12,
    range: 10.0,
    damage: 69.1,
  }),
  new ItemEntity({
    type: ItemType.Sword,
    tipMaterial: TipMaterial.Flint,
    element: Element.Water,
    shaftColor: shaftColor13,
    range: 10.0,
    damage: 44.77,
  }),
  new ItemEntity({
    type: ItemType.Sword,
    tipMaterial: TipMaterial.Wood,
    element: Element.Fire,
    shaftColor: shaftColor14,
    range: 10.0,
    damage: 42.51,
  }),
  new ItemEntity({
    type: ItemType.Sword,
    tipMaterial: TipMaterial.Bone,
    element: Element.Fire,
    shaftColor: shaftColor15,
    range: 10.0,
    damage: 26.8,
  }),
  new ItemEntity({
    type: ItemType.Sword,
    tipMaterial: TipMaterial.Flint,
    element: Element.Air,
    shaftColor: shaftColor16,
    range: 10.0,
    damage: 47.97,
  }),
];

export const spears = [
  new ItemEntity({
    type: ItemType.Spear,
    tipMaterial: TipMaterial.Bone,
    element: Element.Water,
    shaftColor: shaftColor1,
    range: 51.25,
    damage: 66.98,
  }),
  new ItemEntity({
    type: ItemType.Spear,
    tipMaterial: TipMaterial.Flint,
    element: Element.Fire,
    shaftColor: shaftColor2,
    range: 84.74,
    damage: 79.38,
  }),
  new ItemEntity({
    type: ItemType.Spear,
    tipMaterial: TipMaterial.Wood,
    element: Element.Earth,
    shaftColor: shaftColor3,
    range: 45.29,
    damage: 46.06,
  }),
  new ItemEntity({
    type: ItemType.Spear,
    tipMaterial: TipMaterial.Obsidian,
    element: Element.Air,
    shaftColor: shaftColor4,
    range: 37.52,
    damage: 41.9,
  }),
  new ItemEntity({
    type: ItemType.Spear,
    tipMaterial: TipMaterial.Wood,
    element: Element.Water,
    shaftColor: shaftColor5,
    range: 70.22,
    damage: 24.74,
  }),
  new ItemEntity({
    type: ItemType.Spear,
    tipMaterial: TipMaterial.Wood,
    element: Element.Earth,
    shaftColor: shaftColor6,
    range: 72.02,
    damage: 60.29,
  }),
  new ItemEntity({
    type: ItemType.Spear,
    tipMaterial: TipMaterial.Wood,
    element: Element.Earth,
    shaftColor: shaftColor7,
    range: 75.14,
    damage: 68.62,
  }),
  new ItemEntity({
    type: ItemType.Spear,
    tipMaterial: TipMaterial.Flint,
    element: Element.Water,
    shaftColor: shaftColor8,
    range: 46.34,
    damage: 56.66,
  }),
  new ItemEntity({
    type: ItemType.Spear,
    tipMaterial: TipMaterial.Wood,
    element: Element.Air,
    shaftColor: shaftColor9,
    range: 43.9,
    damage: 37.75,
  }),
  new ItemEntity({
    type: ItemType.Spear,
    tipMaterial: TipMaterial.Wood,
    element: Element.Fire,
    shaftColor: shaftColor10,
    range: 53.23,
    damage: 74.52,
  }),
  new ItemEntity({
    type: ItemType.Spear,
    tipMaterial: TipMaterial.Bone,
    element: Element.Earth,
    shaftColor: shaftColor11,
    range: 44.13,
    damage: 67.27,
  }),
  new ItemEntity({
    type: ItemType.Spear,
    tipMaterial: TipMaterial.Obsidian,
    element: Element.Air,
    shaftColor: shaftColor12,
    range: 69.1,
    damage: 77.31,
  }),
  new ItemEntity({
    type: ItemType.Spear,
    tipMaterial: TipMaterial.Flint,
    element: Element.Water,
    shaftColor: shaftColor13,
    range: 44.77,
    damage: 44.19,
  }),
  new ItemEntity({
    type: ItemType.Spear,
    tipMaterial: TipMaterial.Wood,
    element: Element.Fire,
    shaftColor: shaftColor14,
    range: 42.51,
    damage: 47.44,
  }),
  new ItemEntity({
    type: ItemType.Spear,
    tipMaterial: TipMaterial.Bone,
    element: Element.Fire,
    shaftColor: shaftColor15,
    range: 26.8,
    damage: 38.94,
  }),
  new ItemEntity({
    type: ItemType.Spear,
    tipMaterial: TipMaterial.Flint,
    element: Element.Air,
    shaftColor: shaftColor16,
    range: 47.97,
    damage: 59.5,
  }),
];
