import { ApiProperty } from '@nestjs/swagger';
import { z } from 'zod';

class Image {
  id: string;
  url: string;
}

export const ImagePayload = z.object({
  base64Data: z.string(),
  imageName: z.string().optional(),
  imagePrefix: z.string().optional(),
  fullName: z.string(),
  imageExtension: z.string().regex(/^[.][^.]+/, "Must start with '.'"),
  currentPhoto: z.string().optional(),
});
export type ImagePayload = z.infer<typeof ImagePayload>;

export const CampaignMilestone = z.object({
  name: z.string(),
  detail: z.string(),
  deadline: z.string(),
});
export type CampaignMilestone = z.infer<typeof CampaignMilestone>;

export const CreateCampaignDto = z.object({
  organizationId: z.string().min(1),
  // name: z.string(),
  userId: z.string(),
  campaignName: z.string().min(1),
  campaignType: z.string(),
  projectId: z.string().optional(),
  // type: z.string(),
  description: z.string(),
  isMoney: z.string(),
  methods: z.array(z.string()),
  currencyCode: z.string(),
  amountProgress: z.string(),
  amountTarget: z.string(),
  // coverImage: z.string(),
  // image1: z.string(),
  // image2: z.string(),
  // image3: z.string(),
  // images: z.array(Image);
  images: z.array(ImagePayload),
  milestone: z.array(CampaignMilestone).optional(),
});
export type CreateCampaignDto = z.infer<typeof CreateCampaignDto>;

/* export class CreateCampaignDtoX {
  @ApiProperty()
  readonly organizationId: string;

  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly userId: string;

  @ApiProperty()
  readonly campaignName: string;

  @ApiProperty()
  readonly campaignType: string;

  @ApiProperty()
  readonly projectId: string;

  @ApiProperty()
  readonly type: string;

  @ApiProperty()
  readonly description: string;

  @ApiProperty()
  readonly isMoney: string;

  @ApiProperty()
  readonly methods: string;

  @ApiProperty()
  readonly currencyCode: string;

  @ApiProperty()
  readonly amountProgress: string;

  @ApiProperty()
  readonly amountTarget: string;

  @ApiProperty()
  readonly coverImage: string;

  @ApiProperty()
  readonly image1: string;

  @ApiProperty()
  readonly image2: string;

  @ApiProperty()
  readonly image3: string;

  @ApiProperty()
  readonly images: Array<Image>;

  @ApiProperty()
  readonly imagePayload: Array<Payload>;

  @ApiProperty()
  readonly milestone: Array<listMileStone>;
}
 */
