// import { TypeOrmModuleOptions } from '@nestjs/typeorm';

// export const typeORMConfig: TypeOrmModuleOptions = {
//   type: 'mysql',
//   host: '127.0.0.1',
//   port: 3306,
//   username: process.env.DATABASE_USERNAME,
//   password: 'Rlawlsdnr1!',
//   database: 'jindol_code',
//   entities: [__dirname + '/../**/*.entity{.ts,.js}'],
//   synchronize: true,
// };

import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export class MysqlConfigProvider implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      host: this.configService.get('DB_HOST'),
      port: this.configService.get<number>('DB_PORT'),
      username: this.configService.get('DB_USERNAME'),
      password: this.configService.get('DB_PASSWORD'),
      database: this.configService.get('DB_DATABASE'),
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
    };
  }
}
