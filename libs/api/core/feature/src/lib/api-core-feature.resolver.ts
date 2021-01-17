import {Float, Query, Resolver} from '@nestjs/graphql';

@Resolver()
export class ApiCoreFeatureResolver {

  @Query(() => Float, { nullable: true })
  uptime() {
    return process.uptime()
  }
}
