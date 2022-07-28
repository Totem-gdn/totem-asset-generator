import { Sex } from '../enums/sex.enum';
import { Color } from '../lib/color-utils';
import { HairStyle } from '../enums/hair-style.enum';
import { BodyFat } from '../enums/body-fat.enum';
import { BodyMuscles } from '../enums/body-muscles.enum';

export interface IAvatar {
  sex: Sex;
  skinColor: Color;
  hairColor: Color;
  hairStyle: HairStyle;
  eyeColor: Color;
  bodyFat: BodyFat;
  bodyMuscles: BodyMuscles;
}
