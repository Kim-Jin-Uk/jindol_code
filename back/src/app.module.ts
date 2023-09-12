import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { MysqlConfigProvider } from 'mysql/mysql-config.provider';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.develop'],
      isGlobal: true,
      cache: true,
    }),
    TypeOrmModule.forRootAsync({ useClass: MysqlConfigProvider }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
