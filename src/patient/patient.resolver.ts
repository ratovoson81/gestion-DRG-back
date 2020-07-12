import { Resolver, Query } from '@nestjs/graphql';

@Resolver('Patient')
export class PatientResolver {
  @Query(() => String)
  async hello() {
    return 'hello world';
  }
}
