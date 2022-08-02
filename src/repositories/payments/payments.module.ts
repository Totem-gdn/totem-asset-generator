import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PaymentDetails, PaymentDetailsSchema } from './schemas/payment-details.schema';
import { PaymentsService } from './payments.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: PaymentDetails.name, schema: PaymentDetailsSchema }])],
  providers: [PaymentsService],
  exports: [PaymentsService],
})
export class PaymentsModule {}
