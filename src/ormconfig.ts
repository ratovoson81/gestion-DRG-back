import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Personne } from './personne/personne.entity';
import { Consultation } from './consultation/consultation.entity';
import { Diagnostic } from './diagnostic/diagnostic.entity';
import { Article } from './article/article.entity';
import { Analyse } from './analyse/analyse.entity';

const ormconfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'gestion_medicale',
  entities: [Personne, Consultation, Diagnostic, Article, Analyse],
  synchronize: true,
};

export default ormconfig;
