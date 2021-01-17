import { Module } from '@nestjs/common';
import {ApiListingDataAccessModule} from "@bev002/api/listing/data-access";

@Module({
  imports: [ApiListingDataAccessModule],
  providers: [],
  exports: [],
})
export class ApiListingFeatureModule {}
