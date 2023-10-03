import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ReferralDocument = Referral & Document;

@Schema({ collection: 'affiliation' })
export class Referral {
  @Prop()
  visitorDonation: string;
  @Prop()
  referralURL: string;
}

export const ReferralSchema = SchemaFactory.createForClass(Referral);
