import { Module } from '@nestjs/common';
import { AssetsController } from './assets.controller';
import { AssetsService } from './assets.service';
import { MinterModule } from '../../minter/minter.module';

@Module({
  imports: [MinterModule],
  controllers: [AssetsController],
  providers: [AssetsService],
})
export class AssetsModule {}
