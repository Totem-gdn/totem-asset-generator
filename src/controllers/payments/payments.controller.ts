import { Controller, Logger, UseFilters, UsePipes } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { UnhandledExceptionFilter } from '../../utils/filters/unhandled-exception.filter';
import { RpcValidationPipe } from '../../utils/pipes/rpc-validation.pipe';
import { PaymentsService } from '../../repositories/payments/payments.service';
import { Empty, ListPaymentDetailsRequest, ListPaymentDetailsResponse } from './payments.interface';
import { CreatePaymentDetailsDTO } from './payments.dto';

@Controller()
export class PaymentsController {
  private readonly logger = new Logger(PaymentsController.name);

  constructor(private readonly repositoryService: PaymentsService) {}

  @UseFilters(UnhandledExceptionFilter)
  @UsePipes(new RpcValidationPipe(true))
  @GrpcMethod('Payments', 'CreatePaymentDetails')
  async createPaymentDetails(paymentDetails: CreatePaymentDetailsDTO): Promise<Empty> {
    this.logger.log(`CreatePaymentDetails: creating payment details for ${paymentDetails.transactionHash}`);
    await this.repositoryService.createPaymentDetails(paymentDetails);
    return {};
  }

  @UseFilters(UnhandledExceptionFilter)
  @UsePipes(new RpcValidationPipe(true))
  @GrpcMethod('Payments', 'ListPaymentDetails')
  async listPaymentDetails(request: ListPaymentDetailsRequest): Promise<ListPaymentDetailsResponse> {
    const paymentDetails = await this.repositoryService.listPaymentDetails({
      fromTimestamp: request.fromTimestamp.toNumber(),
      fromAddress: request.fromAddress,
    });
    return { paymentDetails };
  }
}
