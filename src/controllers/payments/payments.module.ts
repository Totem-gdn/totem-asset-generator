import { Module } from '@nestjs/common';
import { PaymentsController } from './payments.controller';
import { PaymentsModule as PaymentsRepositoryModule } from '../../repositories/payments/payments.module';

@Module({
  imports: [PaymentsRepositoryModule],
  controllers: [PaymentsController],
})
export class PaymentsModule {}
