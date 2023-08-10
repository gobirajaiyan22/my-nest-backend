import { Module } from '@nestjs/common';
import EnrolmentController from './enrolment.controller';
import { EnrolmentProvider } from './enrolment.service';

@Module({
  controllers: [EnrolmentController],
  providers: [EnrolmentProvider],
})
export class EnrolmentModule {}
