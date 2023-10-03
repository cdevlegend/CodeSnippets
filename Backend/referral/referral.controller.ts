import { Controller, Get, Post } from '@nestjs/common';
import { ReferralService } from './referral.service';
import { rootLogger } from '../logger';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('referral')
@Controller('referral')
export class ReferralController {
  private logger = rootLogger.child({ logger: ReferralController.name });

  constructor(private referralService: ReferralService) {}

  //referralGetListAll
  @Get('/getListAll')
  async findAll() {
    this.logger.debug('findAll...');
    return await this.referralService.findAll();
  }

  //referralGetSummary
  @Get('/getSummary')
  async getSummary() {
    return { message: 'Hello World !' };
  }

  //referralGetTopFiveByProjectByZone
  @Get('/getTopFiveByProjectByZone')
  async getTopFiveByProjectByZone() {
    return { message: 'Hello World !' };
  }
}
