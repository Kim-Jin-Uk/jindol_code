import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: 'Rlawlsdnr1!',
  database: 'jindol_code',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
};
