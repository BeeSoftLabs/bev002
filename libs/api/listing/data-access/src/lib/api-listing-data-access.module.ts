import { Module } from '@nestjs/common';
import {ApiListingDataAccessService} from "./api-listing-data-access.service";
import {ApiCoreDataAccessModule} from "@bev002/api/core/data-access";

@Module({
  imports: [ApiCoreDataAccessModule],
  providers: [ApiListingDataAccessService],
  exports: [ApiListingDataAccessService],
})
export class ApiListingDataAccessModule {}

