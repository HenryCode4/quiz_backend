// typeorm.config.ts

import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Option } from 'src/options/entities/option.entity';
import { Question } from 'src/question/entities/question.entity';
import { Quiz } from 'src/quiz/entities/quiz.entity';
import { User } from 'src/user/entities/user.entity';

export default class TypeOrmConfig {
  static getOrmConfig(configService: ConfigService): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: configService.get('DB_HOST'),
      port: configService.get('DB_PORT'),
      username: configService.get('DB_USERNAME'),
      password: configService.get('DB_PASSWORD'),
      database: configService.get('DB_NAME'),
      entities: [Quiz, Question, Option, User],
      synchronize: false,
      logging: true
    };
  }
}

export const typeOrmConfigAsync: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  useFactory: async (
    configService: ConfigService,
  ): Promise<TypeOrmModuleOptions> => TypeOrmConfig.getOrmConfig(configService),
  inject: [ConfigService],
};


// import { ConfigModule, ConfigService } from '@nestjs/config';
// import {
//   TypeOrmModuleAsyncOptions,
//   TypeOrmModuleOptions,
// } from '@nestjs/typeorm';

// export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
//   imports: [ConfigModule],
//   inject: [ConfigService],
//   useFactory: async (): Promise<TypeOrmModuleOptions> => {
//     return {
//       type: 'mysql',
//       host: process.env.DB_HOST,
//       port: parseInt(process.env.DB_PORT, 10),
//       username: process.env.DB_USERNAME,
//       database: process.env.DB_NAME,
//       password: process.env.DB_PASSWORD,
//       entities: [__dirname + '/../*/.entity.{js,ts}'],
//       migrations: [__dirname + '/../database/migrations/*{.ts,.js}'],
//       cli: {
//         migrationsDir: __dirname + '/../database/migrations',
//       },
//       extra: {
//         charset: 'utf8mb4_unicode_ci',
//       },
//       synchronize: false,
//       logging: true,
//     };
//   },
// };

// export const typeOrmConfig: TypeOrmModuleOptions = {
//   type: 'mysql',
//   host: process.env.DB_HOST,
//   port: parseInt(process.env.DB_PORT, 10),
//   username: process.env.DB_USERNAME,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASSWORD,
//   entities: [__dirname + '/../*/.entity.{js,ts}'],
//   migrations: [__dirname + '/../database/migrations/*{.ts,.js}'],
//   cli: {
//     migrationsDir: __dirname + '/../database/migrations',
//   },
//   extra: {
//     charset: 'utf8mb4_unicode_ci',
//   },
//   synchronize: false,
//   logging: true,
// };
