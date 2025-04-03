import { Controller } from '@nestjs/common';
import { RiderService } from './rider.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller('rider')
export class RiderController {
  constructor(private readonly riderService: RiderService) {}

  @MessagePattern({ cmd: 'get-rider' })
  async getRiderById(data: any): Promise<any> {
    return Promise.resolve({
      _id: data.id,
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'janedoe@email.com'
    })
  }
}
