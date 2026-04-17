import { Module } from '@nestjs/common';
import { PostgresModule } from './postgres/postgres.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { SecurityModule } from './security/security.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    UserModule,
    PostgresModule,
    SecurityModule
  ],
})
export class AppModule {}
