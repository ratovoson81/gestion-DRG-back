import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatientService } from './patient/patient.service';
import { PatientResolver } from './patient/patient.resolver';
import { PatientModule } from './patient/patient.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormconfig from './ormconfig';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    TypeOrmModule.forRoot(ormconfig),
    PatientModule,
  ],
  controllers: [AppController],
  providers: [AppService, PatientService, PatientResolver],
})
export class AppModule {}
