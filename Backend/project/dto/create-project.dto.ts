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

export const NearByPlaces = z.object({
  placeType: z.string(),
  name: z.string(),
  distance: z.string(),
});
export type NearByPlaces = z.infer<typeof NearByPlaces>;

export const CreateProjectDto = z.object({
  organizationId: z.string().min(1),
  name: z.string(),
  userId: z.string(),
  // projectId: z.string().optional(),
  // type: z.string(),
  description: z.string(),
  address: z.string(),
  nearByPlaces: z.array(NearByPlaces),
  location: z.string(),
  diameterSize: z.string(),
  prayerSize: z.string(),
  toiletSize: z.string(),
  hasAc: z.string(),
  hasClassroom: z.string(),
  hasParking: z.string(),
  hasGreenSpace: z.string(),
  images: z.array(ImagePayload),
  hasFemaleSection: z.string(),
});
export type CreateProjectDto = z.infer<typeof CreateProjectDto>;
