import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './services/auth.service';
import { UsersModule } from 'src/users/users.module';
import { AuthServiceInterface } from './interfaces/auth-service.interface';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [
    {
      provide: AuthServiceInterface,
      useClass: AuthService
    }
  ]
})
export class AuthModule {}
