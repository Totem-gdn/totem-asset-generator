import { Injectable } from '@nestjs/common';
import { MinterService } from '../../minter/minter.service';
import { MintAssetRequestDTO } from './dto/assets.dto';
import { AssetType } from '../../minter/enums/asset-type.enum';

@Injectable()
export class AssetsService {
  constructor(private readonly minterService: MinterService) {}

  async mintAsset({ payerAddress, assetType }: MintAssetRequestDTO): Promise<Record<string, never>> {
    if (assetType === AssetType.Avatar) {
      await this.minterService.generateAvatar(payerAddress);
    } else {
      await this.minterService.generateItem(payerAddress, assetType);
    }
    return {};
  }
}
