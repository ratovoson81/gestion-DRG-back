import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Consultation } from './consultation.entity';
import { Repository } from 'typeorm';
import { PersonneService } from 'src/personne/personne.service';
import { InputConsultation } from './consultation.input';

@Injectable()
export class ConsultationService {
  constructor(
    @InjectRepository(Consultation)
    private consultationRepository: Repository<Consultation>,
    private personneService: PersonneService,
  ) {}

  async createConsultation(data: InputConsultation, idPersonne: string) {
    const consultation = new Consultation();
    const date = new Date();
    const personne = await this.personneService.getPersonneById(idPersonne);
    Object.assign(consultation, data);
    consultation.personne = personne;
    consultation.date = date;
    return this.consultationRepository.save(consultation);
  }
}
