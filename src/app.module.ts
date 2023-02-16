import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { BokkmarkModule } from './bokkmark/bokkmark.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [UserModule, AuthModule, BokkmarkModule, PrismaModule],
})
export class AppModule {}
