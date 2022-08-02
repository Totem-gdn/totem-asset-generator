import { Injectable } from '@nestjs/common';
import { AssetsService as AssetsRepository } from '../../repositories/assets/assets.service';
import { MintAssetRequestDTO } from './assets.dto';
import { AssetType } from '../../repositories/assets/enums/asset-type.enum';
import { Empty } from './assets.interface';

@Injectable()
export class AssetsService {
  constructor(private readonly repository: AssetsRepository) {}

  async mintAsset({ payerAddress, assetType }: MintAssetRequestDTO): Promise<Empty> {
    if (assetType === AssetType.Avatar) {
      await this.repository.generateAvatar(payerAddress);
    } else {
      await this.repository.generateItem(payerAddress, assetType);
    }
    return {};
  }
}
