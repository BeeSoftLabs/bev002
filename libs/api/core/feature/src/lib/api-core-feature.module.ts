import { Module } from '@nestjs/common';
import {ApiCoreDataAccessModule} from "@bev002/api/core/data-access";
import {GraphQLModule} from "@nestjs/graphql";
import { join } from 'path';
import {ApiCoreFeatureResolver} from "./api-core-feature.resolver";

@Module({
  imports: [
    ApiCoreDataAccessModule,
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'api-schema.graphql'),
    }),
  ],
  providers: [ApiCoreFeatureResolver],
  exports: [],
})
export class ApiCoreFeatureModule {}
