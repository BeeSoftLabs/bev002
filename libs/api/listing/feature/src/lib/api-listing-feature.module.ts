import { Module } from '@nestjs/common';
import {ApiListingDataAccessModule} from '@bev002/api/listing/data-access';
import { ApiListingFeatureResolver } from './api-listing-feature.resolver';

@Module({
  imports: [ApiListingDataAccessModule],
  providers: [ApiListingFeatureResolver],
})
export class ApiListingFeatureModule {}
