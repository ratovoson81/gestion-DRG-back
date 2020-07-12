import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Patient } from './patient.entity';
import { PatientService } from './patient.service';
import { PatientResolver } from './patient.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Patient])],
  providers: [PatientService, PatientResolver],
  exports: [PatientService],
})
export class PatientModule {}
