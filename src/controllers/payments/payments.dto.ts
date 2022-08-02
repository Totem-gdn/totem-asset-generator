import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePaymentDetailsDTO {
  @IsString()
  @IsNotEmpty()
  transactionHash: string;

  @IsString()
  @IsNotEmpty()
  // @IsEthereumAddress()
  from: string;

  @IsString()
  @IsNotEmpty()
  // @IsEthereumAddress()
  to: string;

  @IsString()
  @IsNotEmpty()
  amount: string;
}

export class ListPaymentDetailsFiltersDTO {
  fromTimestamp: number;
  fromAddress: string;
}

export class PaymentDetailsDTO {
  transactionHash: string;
  from: string;
  to: string;
  timestamp: number;
  amount: string;
}
