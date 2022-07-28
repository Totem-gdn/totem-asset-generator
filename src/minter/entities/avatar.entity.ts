import { getRandomHairStyle, HairStyle } from '../enums/hair-style.enum';
import { getRandomSex, Sex } from '../enums/sex.enum';
import { BodyFat, getRandomBodyFat } from '../enums/body-fat.enum';
import { BodyMuscles, getRandomBodyMuscles } from '../enums/body-muscles.enum';
import { Color, ColorUtils } from '../lib/color-utils';
import { IAvatar } from '../interfaces/avatar.interface';

export class AvatarEntity {
  private readonly _sex: Sex;
  private readonly _skinColor: Color;
  private readonly _hairColor: Color;
  private readonly _hairStyle: HairStyle;
  private readonly _eyeColor: Color;
  private readonly _bodyFat: BodyFat;
  private readonly _bodyMuscles: BodyMuscles;

  constructor();
  constructor(avatar: IAvatar);
  constructor(avatar?: IAvatar) {
    this._sex = avatar?.sex !== undefined ? avatar.sex : getRandomSex();
    this._skinColor = avatar?.skinColor || ColorUtils.randomHex();
    this._hairColor = avatar?.hairColor || ColorUtils.randomHex();
    this._hairStyle = avatar?.hairStyle !== undefined ? avatar.hairStyle : getRandomHairStyle();
    this._eyeColor = avatar?.eyeColor || ColorUtils.randomHex();
    this._bodyFat = avatar?.bodyFat !== undefined ? avatar.bodyFat : getRandomBodyFat();
    this._bodyMuscles = avatar?.bodyMuscles !== undefined ? avatar.bodyMuscles : getRandomBodyMuscles();
  }

  get schemaValues(): IAvatar {
    return {
      sex: this._sex,
      skinColor: this._skinColor,
      hairColor: this._hairColor,
      hairStyle: this._hairStyle,
      eyeColor: this._eyeColor,
      bodyFat: this._bodyFat,
      bodyMuscles: this._bodyMuscles,
    };
  }

  toString(): string {
    return `Sex:${this._sex},SkinColor:${this._skinColor},HairColor:${this._hairColor},HairStyle:${this._hairStyle},EyeColor:${this._eyeColor},BodyFat:${this._bodyFat},BodyMuscles:${this._bodyMuscles}`;
  }
}
