import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonneService } from './personne/personne.service';
import { PersonneResolver } from './personne/personne.resolver';
import { PersonneModule } from './personne/personne.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormconfig from './ormconfig';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ConsultationModule } from './consultation/consultation.module';
import { DiagnosticResolver } from './diagnostic/diagnostic.resolver';
import { DiagnosticService } from './diagnostic/diagnostic.service';
import { DiagnosticModule } from './diagnostic/diagnostic.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    TypeOrmModule.forRoot(ormconfig),
    PersonneModule,
    ConsultationModule,
    DiagnosticModule,
  ],
  controllers: [AppController],
  providers: [AppService, DiagnosticResolver, DiagnosticService],
})
export class AppModule {}
