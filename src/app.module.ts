import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import appConfig from './configuration/app/app.config';
import mongoDbConfig, { IMongoDbConfig, MONGODB_NAMESPACE } from './configuration/mongodb/mongodb.config';
import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
import { HealthModule } from './controllers/health/health.module';
import { AssetsModule } from './controllers/assets/assets.module';
import { PaymentsModule } from './controllers/payments/payments.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      load: [appConfig, mongoDbConfig],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        const mongoDbCfg = configService.get<IMongoDbConfig>(MONGODB_NAMESPACE);
        const dbConfig: MongooseModuleOptions = {
          uri: mongoDbCfg.uri,
          dbName: mongoDbCfg.database,
        };
        return dbConfig;
      },
      inject: [ConfigService],
    }),
    HealthModule,
    AssetsModule,
    PaymentsModule,
  ],
})
export class AppModule {}
