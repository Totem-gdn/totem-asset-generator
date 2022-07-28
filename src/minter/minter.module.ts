import { Module } from '@nestjs/common';
import { MinterService } from './minter.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Avatar, AvatarSchema } from './schemas/avatar.schema';
import { Item, ItemSchema } from './schemas/item.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Avatar.name, schema: AvatarSchema },
      { name: Item.name, schema: ItemSchema },
    ]),
  ],
  providers: [MinterService],
  exports: [MinterService],
})
export class MinterModule {}
