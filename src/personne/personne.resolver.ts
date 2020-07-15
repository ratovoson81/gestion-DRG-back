import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PersonneService } from './personne.service';
import { Personne } from './personne.entity';
import { InputPersonne } from './personne.input';

@Resolver('Personne')
export class PersonneResolver {
  constructor(private personneService: PersonneService) {}

  @Query(() => String)
  async hello() {
    return 'hello world';
  }

  @Mutation(returns => Personne)
  async createPersonne(@Args('data') newPersonneData: InputPersonne) {
    return this.personneService.createPersonne(newPersonneData);
  }
}
