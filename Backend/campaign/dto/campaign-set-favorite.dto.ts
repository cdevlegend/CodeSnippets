import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CampaignSetFavoriteDto {
  @ApiProperty()
  @IsNotEmpty()
  readonly campaignIds: string[];

  @ApiProperty()
  @IsNotEmpty()
  readonly donorId: string;
}
