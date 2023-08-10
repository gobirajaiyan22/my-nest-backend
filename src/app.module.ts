import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnrolmentModule } from './enrolment/enrolment.module';
// import { TestControllerController } from './test.controller/test.controller.controller';
// import { ProductsController } from './products/products.controller';

@Module({
  imports: [EnrolmentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
