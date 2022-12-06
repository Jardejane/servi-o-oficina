import { Module } from '@nestjs/common';
import { CustomerModule } from './customer/customer.module';
import { ClerkModule } from './clerk/clerk.module';

@Module({
  imports: [CustomerModule, ClerkModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
