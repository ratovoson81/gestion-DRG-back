import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Analyse } from './analyse.entity';
import { AnalyseService } from './analyse.service';
import { AnalyseResolver } from './analyse.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Analyse])],
  providers: [AnalyseService, AnalyseResolver],
  exports: [AnalyseService],
})
export class AnalyseModule {}
