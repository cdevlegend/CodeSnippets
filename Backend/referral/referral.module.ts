import { Module } from '@nestjs/common';
// import { OrgsService } from './orgs.service';
// import { OrgsController } from './orgs.controller';
import { ReferralController } from './referral.controller';
import { ReferralService } from './referral.service';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Referral,
  ReferralSchema,
} from './referral.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Referral.name,
        schema: ReferralSchema,
      },
    ]),
  ],
  providers: [ ReferralService],
  controllers: [ ReferralController],
})
export class ReferralModule {}
