import { Module } from '@nestjs/common';
import {ApiCoreFeatureModule} from "@bev002/api/core/feature";
import {ApiListingFeatureModule} from "@bev002/api/listing/feature";

@Module({
  imports: [
    ApiCoreFeatureModule,
    ApiListingFeatureModule,
  ],
})
export class AppModule {}
