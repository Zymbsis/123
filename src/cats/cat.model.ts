import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type CatDocument = Cat & Document;

@Schema()
export class Cat {
  @Prop({ required: true })
  id: number;

  @Prop({ required: true })
  breed: string;

  @Prop({ required: true })
  origin: string;

  @Prop({ required: true })
  imageUrl: string;

  @Prop({ required: true })
  description: string;
}

export const CatSchema = SchemaFactory.createForClass(Cat);
