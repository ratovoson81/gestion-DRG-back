import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { DiagnosticService } from './diagnostic.service';
import { Diagnostic } from './diagnostic.entity';
import { InputDiagnostic } from './diagnostic.input';

@Resolver('Diagnostic')
export class DiagnosticResolver {
  constructor(private diagnosticService: DiagnosticService) {}

  @Query(returns => [Diagnostic])
  async getAllDiagnostic() {
    return this.diagnosticService.getAllDiagnostic();
  }

  @Mutation(returns => Diagnostic)
  async createDiagnostic(@Args('data') newData: InputDiagnostic) {
    return this.diagnosticService.createDiagnostic(newData);
  }

  @Mutation(returns => Diagnostic)
  async updateDiagnostic(@Args('data') newData: InputDiagnostic) {
    return this.diagnosticService.updateDiagnostic(newData);
  }

  @Mutation(returns => Diagnostic)
  async deleteDiagnostic(@Args('id', { type: () => ID }) id: number) {
    return this.diagnosticService.deleteDiagnostic(id);
  }
}
