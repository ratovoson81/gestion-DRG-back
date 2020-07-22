import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Diagnostic } from './diagnostic.entity';
import { DiagnosticService } from './diagnostic.service';
import { DiagnosticResolver } from './diagnostic.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Diagnostic])],
  providers: [DiagnosticService, DiagnosticResolver],
  exports: [DiagnosticService],
})
export class DiagnosticModule {}
