import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Diagnostic } from './diagnostic.entity';
import { Repository } from 'typeorm';
import { InputDiagnostic } from './diagnostic.input';

@Injectable()
export class DiagnosticService {
  constructor(
    @InjectRepository(Diagnostic)
    private diagnosticRepository: Repository<Diagnostic>,
  ) {}

  async getAllDiagnostic(): Promise<Diagnostic[]> {
    return this.diagnosticRepository.find({
      relations: ['consultations'],
    });
  }

  async createDiagnostic(newData: InputDiagnostic): Promise<Diagnostic> {
    const diagnostic = new Diagnostic();
    Object.assign(diagnostic, newData);
    return this.diagnosticRepository.save(diagnostic);
  }
}
