import { Resolver, Mutation, Args, ID, Query } from '@nestjs/graphql';
import { ConsultationService } from './consultation.service';
import { Consultation } from './consultation.entity';
import { InputConsultation } from './consultation.input';

@Resolver('Consultation')
export class ConsultationResolver {
  constructor(private consultationService: ConsultationService) {}

  @Mutation(returns => Consultation)
  async createConsultation(
    @Args('data') consultationData: InputConsultation,
    @Args('idPersonne', { type: () => ID }) idPersonne: string,
  ) {
    return this.consultationService.createConsultation(
      consultationData,
      idPersonne,
    );
  }

  @Query(returns => [Consultation])
  async getAllConsultation() {
    return this.consultationService.getAllConsultation();
  }

  @Mutation(returns => Consultation)
  async updateConsultation(@Args('data') updateData: InputConsultation) {
    return this.consultationService.updateConsultation(updateData);
  }

  @Mutation(returns => Consultation)
  async deleteConsultation(@Args('id', { type: () => ID }) id: number) {
    return this.consultationService.deleteConsultation(id);
  }
}
