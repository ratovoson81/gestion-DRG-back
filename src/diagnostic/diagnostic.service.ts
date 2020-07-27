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
    diagnostic.consultations = [];
    return this.diagnosticRepository.save(diagnostic);
  }

  async getDiagnosticById(id: number): Promise<Diagnostic> {
    return await this.diagnosticRepository.findOne({
      where: { idDiagnostic: id },
    });
  }

  async updateDiagnostic(data: InputDiagnostic): Promise<Diagnostic> {
    const diagnostic = await this.diagnosticRepository.findOne({
      where: { idDiagnostic: data.idDiagnostic },
      relations: ['consultations'],
    });
    const { idDiagnostic, ...rest } = data;
    Object.assign(diagnostic, rest);
    return this.diagnosticRepository.save(diagnostic);
  }

  async deleteDiagnostic(id: number): Promise<Diagnostic> {
    const diagnostic = await this.diagnosticRepository.findOne({
      where: { idDiagnostic: id },
    });
    await this.diagnosticRepository.remove(diagnostic);
    diagnostic.idDiagnostic = id;
    return diagnostic;
  }
}
