import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Patient } from './patient/patient.entity';

const ormconfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'gestion_medicale',
  entities: [Patient],
  synchronize: true,
};

export default ormconfig;
