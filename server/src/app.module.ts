import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './modules/user/user.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports: [
        JwtModule.register({ global: true, secret: 'token' }),
        DatabaseModule,
        UserModule,
    ]
})
export class AppModule {}