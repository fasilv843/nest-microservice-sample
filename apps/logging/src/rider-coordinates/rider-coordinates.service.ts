/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Inject, Injectable } from '@nestjs/common';
import { CreateCoordinatesDTO } from './dto/create-coordinates.dto';
import { InjectModel } from '@nestjs/mongoose';
import { RiderCoordinate, RiderCoordinateDocument } from './schemas/rider-coordinates.schema';
import { Model } from 'mongoose';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class RiderCoordinatesService {

    constructor(
        @InjectModel(RiderCoordinate.name)
        private readonly riderCoordinateModel: Model<RiderCoordinateDocument>,
        @Inject('RIDER_SERVICE') private client: ClientProxy
    ) {}

    async getRiderCoordinates(riderId: string) {
        const coordinates =  await this.riderCoordinateModel.find({ rider: riderId })
        const pattern = { cmd: 'get-rider' }
        const payload = { id: riderId }
        const rider: any = await firstValueFrom(this.client.send(pattern, payload)) 
        return { coordinates, rider }
    }

    async saveRiderCoordinates(createCoordinateDTO: CreateCoordinatesDTO) {
        return await this.riderCoordinateModel.create(createCoordinateDTO)
    }
}
