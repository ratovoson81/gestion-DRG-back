import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Personne } from './personne/personne.entity';
import { Consultation } from './consultation/consultation.entity';
import { Diagnostic } from './diagnostic/diagnostic.entity';

const ormconfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'gestion_medicale',
  entities: [Personne, Consultation, Diagnostic],
  synchronize: true,
};

export default ormconfig;
