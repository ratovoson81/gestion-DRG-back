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

  @Query(returns => [Personne])
  async getAllPersonne() {
    return this.personneService.getAllPersonne();
  }

  @Mutation(returns => Personne)
  async createPersonne(@Args('data') newPersonneData: InputPersonne) {
    return this.personneService.createPersonne(newPersonneData);
  }

  @Mutation(returns => Personne)
  async updatePersonne(@Args('data') personneData: InputPersonne) {
    return this.personneService.updatePersonne(personneData)
  }
}
