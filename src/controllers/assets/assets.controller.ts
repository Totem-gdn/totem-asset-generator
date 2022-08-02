import { Controller, Logger, UseFilters, UsePipes } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { AssetsService } from './assets.service';
import { RpcValidationPipe } from '../../utils/pipes/rpc-validation.pipe';
import { UnhandledExceptionFilter } from '../../utils/filters/unhandled-exception.filter';
import { MintAssetRequestDTO } from './assets.dto';
import { Empty } from './assets.interface';

@Controller()
export class AssetsController {
  private readonly logger = new Logger(AssetsController.name);

  constructor(private readonly assetsService: AssetsService) {}

  @UseFilters(UnhandledExceptionFilter)
  @UsePipes(new RpcValidationPipe(true))
  @GrpcMethod('Assets', 'MintAsset')
  async mintAsset(request: MintAssetRequestDTO): Promise<Empty> {
    this.logger.log(`MintAsset: minting ${request.assetType} for ${request.payerAddress}`);
    return await this.assetsService.mintAsset(request);
  }
}
