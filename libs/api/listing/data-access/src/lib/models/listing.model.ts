import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ListingType } from './listing-type.enum';


@ObjectType()
export class Listing {
  
  @Field({ nullable: true })
  id: string
  
  @Field({ nullable: true })
  createdAt: Date
  
  @Field({ nullable: true })
  updatedAt:Date
  
  @Field({ nullable: true })
  title: string
  
  @Field({ nullable: true })
  text: string
  
  @Field(() => ListingType, { nullable: true })
  type: ListingType
  
  @Field(() => Int, { nullable: true })
  price: number

}