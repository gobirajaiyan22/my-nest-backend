import { Injectable } from '@nestjs/common';

@Injectable()
export class EnrolmentProvider {
  enrolCustomer(): string {
    return 'enrolment is done';
  }
}
