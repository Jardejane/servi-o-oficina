import { Module } from '@nestjs/common';
import { CustomerModule } from './customer/customer.module';
import { ClerkModule } from './clerk/clerk.module';
import { ServicesModule } from './services/services.module';

@Module({
  imports: [CustomerModule, ClerkModule, ServicesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
