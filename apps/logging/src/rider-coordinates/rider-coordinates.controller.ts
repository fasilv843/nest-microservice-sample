/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateCoordinatesDTO } from './dto/create-coordinates.dto';
import { RiderCoordinatesService } from './rider-coordinates.service';

@Controller('rider-coordinates')
export class RiderCoordinatesController {
    constructor(private coordinateService: RiderCoordinatesService) {}

    @Get(':id')
    getRiderCoordinates (
        @Param() params: any
    ) {
        console.log(params, 'params');
        
        return this.coordinateService.getRiderCoordinates(params.id);
    }

    @Post()
    async saveRiderCoordinates (@Body() createCoordinateDTO: CreateCoordinatesDTO) {
        // return createCoordinateDTO;
        return await this.coordinateService.saveRiderCoordinates(createCoordinateDTO)
    }
}
