import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { rootLogger } from '../logger';
import {
  Referral,
  ReferralDocument,
} from './referral.schema';

@Injectable()
export class ReferralService {
  private logger = rootLogger.child({ logger: ReferralService.name });

  constructor(
    @InjectModel(Referral.name)
    private referralModel: Model<ReferralDocument>,
  ) {}

  async findAll() {
    this.logger.debug('findAll...');
    return await this.referralModel.find({}, {}, { sort: { name: 1 } });
  }
}
