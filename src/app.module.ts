import { Module } from '@nestjs/common';
import { CustomerModule } from './customer/customer.module';
import { ClerkModule } from './clerk/clerk.module';
import { ServicesModule } from './services/services.module';
import { OrderModule } from './order/order.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AuthModule, CustomerModule, ClerkModule, ServicesModule, OrderModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
