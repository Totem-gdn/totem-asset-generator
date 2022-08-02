import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Avatar, AvatarDocument } from './schemas/avatar.schema';
import { Item, ItemDocument } from './schemas/item.schema';
import { AvatarEntity } from './entities/avatar.entity';
import { ItemEntity } from './entities/item.entity';
import { avatars } from './entities/__mocks__/avatars';
import { spears, swords } from './entities/__mocks__/items';
import { AssetType } from './enums/asset-type.enum';

@Injectable()
export class AssetsService {
  private readonly assetGenerators: { [type: string]: IterableIterator<AvatarEntity | ItemEntity> } = {};

  constructor(
    @InjectModel(Avatar.name) private readonly avatarModel: Model<AvatarDocument>,
    @InjectModel(Item.name) private readonly itemModel: Model<ItemDocument>,
  ) {
    this.assetGenerators[AssetType.Avatar] = AssetsService.assetGenerator<AvatarEntity>(avatars);
    this.assetGenerators[AssetType.Spear] = AssetsService.assetGenerator<ItemEntity>(spears);
    this.assetGenerators[AssetType.Sword] = AssetsService.assetGenerator<ItemEntity>(swords);
  }

  private static *assetGenerator<T>(collection: T[]): IterableIterator<T> {
    while (true) {
      for (const idx in collection) {
        yield collection[idx];
      }
    }
  }

  async generateAvatar(owner: string): Promise<void> {
    const avatarEntity = this.assetGenerators[AssetType.Avatar].next().value;
    await this.avatarModel.create({
      owner: owner,
      owners: [owner],
      avatar: avatarEntity.schemaValues,
    });
  }

  async generateItem(owner: string, type: string): Promise<void> {
    const itemEntity = this.assetGenerators[type].next().value;
    await this.itemModel.create({
      owner: owner,
      owners: [owner],
      itemType: itemEntity.itemType,
      item: itemEntity.schemaValues,
    });
  }
}
