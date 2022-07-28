import { getRandomTipMaterial, TipMaterial } from '../enums/tip-material.enum';
import { Element, getRandomElement } from '../enums/element.enum';
import { Color, ColorUtils } from '../lib/color-utils';
import { getRandomItemType, ItemType } from '../enums/item-type.enum';
import { IItem } from '../interfaces/item.interface';
import { NumberUtils } from '../lib/number-utils';

export class ItemEntity {
  private readonly _itemType: ItemType;
  private readonly _tipMaterial: TipMaterial;
  private readonly _element: Element;
  private readonly _shaftColor: Color;
  private readonly _range: number;
  private readonly _damage: number;

  constructor();
  constructor(item: IItem & { type: ItemType });
  constructor(item?: IItem & { type: ItemType }) {
    this._itemType = item?.type !== undefined ? item.type : getRandomItemType();
    this._tipMaterial = item?.tipMaterial !== undefined ? item.tipMaterial : getRandomTipMaterial();
    this._element = item?.element !== undefined ? item.element : getRandomElement();
    this._shaftColor = item?.shaftColor || ColorUtils.randomHex();
    this._range = item?.range || NumberUtils.getRandomFloat(50, 100);
    this._damage = item?.damage || NumberUtils.getRandomFloat(50, 100);
  }

  get itemType(): string {
    return `${this._itemType}`;
  }

  get schemaValues(): IItem {
    return {
      tipMaterial: this._tipMaterial,
      element: this._element,
      shaftColor: this._shaftColor,
      range: this._range,
      damage: this._damage,
    };
  }

  toString(): string {
    return `Tip:${this._tipMaterial},Element:${this._element},ShaftColor:${this._shaftColor},Range:${this._range},Damage:${this._damage}`;
  }
}
