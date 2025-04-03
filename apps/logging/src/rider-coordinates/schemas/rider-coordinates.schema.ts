import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

@Schema({ collection: 'ridercoordinates' })
export class RiderCoordinate {
    @Prop({ required: true })
    lat: number;

    @Prop({ required: true })
    lng: number;

    @Prop({ required: true })
    rider: string;

}

export const RiderCoordinateSchema = SchemaFactory.createForClass(RiderCoordinate)

// export type RiderCoordinateDocument = HydratedDocument<typeof RiderCoordinateSchema>;
export type RiderCoordinateDocument = HydratedDocument<RiderCoordinate>;
