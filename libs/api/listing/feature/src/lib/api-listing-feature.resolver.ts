import { ApiListingDataAccessService } from '@bev002/api/listing/data-access';
import { Resolver, Query } from "@nestjs/graphql";



@Resolver()
export class ApiListingFeatureResolver {
  constructor(private readonly service: ApiListingDataAccessService) {}
  
  // obtener items
  @Query()
  listings() {
    
  }
  
  // obtener item
  listing() {}

  // create item
  createListing() {}

  // actualizar
  updateListing() {}

  // eliminar
  deleteListing() {}
}