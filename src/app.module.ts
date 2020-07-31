import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonneModule } from './personne/personne.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormconfig from './ormconfig';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ConsultationModule } from './consultation/consultation.module';
import { DiagnosticModule } from './diagnostic/diagnostic.module';
import { ArticleResolver } from './article/article.resolver';
import { ArticleService } from './article/article.service';
import { ArticleModule } from './article/article.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    TypeOrmModule.forRoot(ormconfig),
    PersonneModule,
    ConsultationModule,
    DiagnosticModule,
    ArticleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
