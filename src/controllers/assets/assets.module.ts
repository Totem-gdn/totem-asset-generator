import { Module } from '@nestjs/common';
import { AssetsController } from './assets.controller';
import { AssetsService } from './assets.service';
import { AssetsModule as AssetsRepositoryModule } from '../../repositories/assets/assets.module';

@Module({
  imports: [AssetsRepositoryModule],
  controllers: [AssetsController],
  providers: [AssetsService],
})
export class AssetsModule {}
