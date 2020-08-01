import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Consultation } from './consultation.entity';
import { Repository } from 'typeorm';
import { PersonneService } from 'src/personne/personne.service';
import { InputConsultation } from './consultation.input';
import { Diagnostic } from 'src/diagnostic/diagnostic.entity';
import { DiagnosticService } from 'src/diagnostic/diagnostic.service';
import { ArticleService } from 'src/article/article.service';

@Injectable()
export class ConsultationService {
  constructor(
    @InjectRepository(Consultation)
    private consultationRepository: Repository<Consultation>,
    private personneService: PersonneService,
    private diagnosticService: DiagnosticService,
    private articleService: ArticleService,
  ) {}

  async createConsultation(data: InputConsultation, idPersonne: string) {
    const consultation = new Consultation();
    const date = new Date();
    const personne = await this.personneService.getPersonneById(idPersonne);
    Object.assign(consultation, data);

    const dataArticle = await this.articleService.create(data.articles);

    consultation.personne = personne;
    consultation.date = date;
    consultation.articles = dataArticle;
    return this.consultationRepository.save(consultation);
  }

  async getAllConsultation(): Promise<Consultation[]> {
    return this.consultationRepository.find({
      relations: ['personne', 'diagnostics', 'articles'],
    });
  }

  async updateConsultation(
    updateData: InputConsultation,
  ): Promise<Consultation> {
    const consultation = await this.consultationRepository.findOne({
      where: { idConsultation: updateData.idConsultation },
      relations: ['personne', 'diagnostics'],
    });

    const dataDiag: Diagnostic[] = [];
    updateData.diagnostics.map((d: Diagnostic) =>
      this.diagnosticService
        .getDiagnosticById(d.idDiagnostic)
        .then(result => dataDiag.push(result)),
    );
    delete updateData.diagnostics;

    const dataArticle = await this.articleService.update(updateData.articles);
    delete updateData.articles;

    const { idConsultation, ...rest } = updateData;
    Object.assign(consultation, rest);

    consultation.diagnostics = dataDiag;
    consultation.articles = dataArticle;
    return this.consultationRepository.save(consultation);
  }

  async deleteConsultation(id: number): Promise<Consultation> {
    const consultation = await this.consultationRepository.findOne({
      where: { idConsultation: id },
    });
    await this.consultationRepository.remove(consultation);
    consultation.idConsultation = id;
    return consultation;
  }
}
