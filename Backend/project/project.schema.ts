import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document, Types } from 'mongoose';

export type ProjectDocument = Project & Document;
export type ProjectOperatorLogDocument = ProjectOperatorLog & Document;

@Schema({ collection: 'projectOperatorLog' })
export class ProjectOperatorLog {
  @Prop({ type: Types.ObjectId })
  _id: Types.ObjectId;

  @Prop({ type: Types.ObjectId })
  projectId: Types.ObjectId;

  @Prop()
  operatorId: string;

  @Prop({
    type: mongoose.Schema.Types.Date,
    default: mongoose.Schema.Types.Date,
  })
  createdAt: string;

  @Prop({
    type: mongoose.Schema.Types.Date,
    default: mongoose.Schema.Types.Date,
  })
  updatedAt: string;

  @Prop()
  status: string;
}

@Schema({ collection: 'project' })
export class Project {
  @Prop({ type: Types.ObjectId })
  public _id?: Types.ObjectId;

  @Prop({ type: Types.ObjectId })
  public organizationId?: Types.ObjectId;

  @Prop({ type: () => String, ref: 'projectOperatorLog' })
  public operatorId?: string;

  @Prop({ type: () => String })
  public name?: string;

  @Prop({ type: () => String })
  public createdAt?: String;

  @Prop({ type: () => String })
  public updatedAt?: String;

  @Prop({ type: () => String })
  public address?: String;

  @Prop({ type: () => String })
  public coverImage?: String;

  @Prop({ type: () => String })
  public image1?: String;

  @Prop({ type: () => String })
  public image2?: String;

  @Prop({ type: () => String })
  public image3?: String;

  @Prop({ type: () => String })
  public description?: String;

  @Prop({ type: () => String })
  public location?: String;

  @Prop({ type: () => String })
  public diameterSize?: String;

  @Prop({ type: () => String })
  public prayerSize?: String;

  @Prop({ type: () => String })
  public toiletSize?: String;

  @Prop({ type: () => String })
  public hasAc?: String;

  @Prop({ type: () => String })
  public hasClassroom?: String;

  @Prop({ type: () => String })
  public hasParking?: String;

  @Prop({ type: () => String })
  public hasGreenSpace?: String;

  @Prop({ type: () => String })
  public hasFemaleSection?: String;

  @Prop({ type: () => String })
  public isDeleted?: String;

  @Prop({ type: () => String })
  public isPublished?: String;

  @Prop({ type: () => String })
  public projectAvatar?: String;

  @Prop({ type: () => Array })
  public nearByPlaces?: Array<Object>;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
export const ProjectOperatorLogSchema =
  SchemaFactory.createForClass(ProjectOperatorLog);
