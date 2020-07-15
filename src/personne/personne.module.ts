import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Personne } from './personne.entity';
import { PersonneService } from './personne.service';
import { PersonneResolver } from './personne.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Personne])],
  providers: [PersonneService, PersonneResolver],
  exports: [PersonneService],
})
export class PersonneModule {}
