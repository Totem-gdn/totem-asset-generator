import { IsIn, IsNotEmpty, IsString } from 'class-validator';
import { AssetType } from '../../../minter/enums/asset-type.enum';

export class MintAssetRequestDTO {
  @IsString()
  @IsNotEmpty()
  payerAddress: string;

  @IsString()
  @IsNotEmpty()
  @IsIn([AssetType.Avatar, AssetType.Spear, AssetType.Sword])
  assetType: string;
}
