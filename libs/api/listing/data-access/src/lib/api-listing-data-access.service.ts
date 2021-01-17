import {ApiCoreDataAccessService} from "@bev002/api/core/data-access";
import {Injectable} from "@nestjs/common";

@Injectable()
export class ApiListingDataAccessService {
  constructor(private readonly data: ApiCoreDataAccessService) {}
}
