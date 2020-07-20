import { Module } from '@nestjs/common';
import { ConsultationService } from './consultation.service';
import { ConsultationResolver } from './consultation.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Consultation } from './consultation.entity';
import { PersonneModule } from 'src/personne/personne.module';

@Module({
  imports: [TypeOrmModule.forFeature([Consultation]), PersonneModule],
  providers: [ConsultationService, ConsultationResolver],
  exports: [ConsultationService],
})
export class ConsultationModule {}
