import { Controller, Get, Param, Query } from '@nestjs/common';
import { EnrolmentProvider } from './enrolment.service';

@Controller('enrolment/profile')
export default class EnrolmentController {
  constructor(public enrolmentProvider: EnrolmentProvider) {}
  @Get('creation/:name')
  enrolCustomer(@Query() params: object, @Param('name') name: string): string {
    console.log('Output params : ', params['id']);
    console.log('name of emplouee : ', name);
    var profile = new Profile();
    profile.age = 10.9;
    return this.enrolmentProvider.enrolCustomer();
  }
}

export class Profile {
  id: string;
  name: string;
  age: number;
}
