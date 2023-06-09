import { SequelizeModuleAsyncOptions } from '@nestjs/sequelize';
import { ConfigService } from '@nestjs/config';
export const getSequelizeConfig = (): SequelizeModuleAsyncOptions => {
  return {
    useFactory: (configService: ConfigService) => {
      const configs = {
        dialect: configService.get('DB_DIALECT'),
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USER'),
        password: configService.get('DB_PASS'),
        database: configService.get('DB_NAME_DEVELOPMENT'),
        autoLoadModels: true,
        synchronize: true,
        logging: true,
        dialectOptions: {},
      };
      if (configService.get('ENV') === 'PROD') {
        configs.dialectOptions = {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
          native: true,
        };
      }
      return configs;
    },
    inject: [ConfigService],
  };
};
