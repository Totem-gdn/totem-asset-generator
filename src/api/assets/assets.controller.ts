import { Controller, UseFilters, UsePipes } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { AssetsService } from './assets.service';
import { RpcValidationPipe } from '../../utils/pipes/rpc-validation.pipe';
import { UnhandledExceptionFilter } from '../../utils/filters/unhandled-exception.filter';
import { MintAssetRequestDTO } from './dto/assets.dto';

@Controller()
export class AssetsController {
  constructor(private readonly assetsService: AssetsService) {}

  @UseFilters(UnhandledExceptionFilter)
  @UsePipes(new RpcValidationPipe(true))
  @GrpcMethod('Assets', 'MintAsset')
  async mintAsset(request: MintAssetRequestDTO): Promise<Record<string, never>> {
    return await this.assetsService.mintAsset(request);
  }
}
