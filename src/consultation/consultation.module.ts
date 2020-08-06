import { Module } from '@nestjs/common';
import { ConsultationService } from './consultation.service';
import { ConsultationResolver } from './consultation.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Consultation } from './consultation.entity';
import { PersonneModule } from 'src/personne/personne.module';
import { DiagnosticModule } from 'src/diagnostic/diagnostic.module';
import { ArticleModule } from 'src/article/article.module';
import { AnalyseModule } from 'src/analyse/analyse.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Consultation]),
    PersonneModule,
    DiagnosticModule,
    ArticleModule,
    AnalyseModule,
  ],
  providers: [ConsultationService, ConsultationResolver],
  exports: [ConsultationService],
})
export class ConsultationModule {}
