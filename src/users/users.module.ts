import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from './entities/user.entity';
import { UsersService } from './services/users.service';
import { UsersServiceInterface } from './interfaces/users-service.interface';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User
    ])
  ],
  providers: [
    {
      provide: UsersServiceInterface,
      useClass: UsersService
    }
  ],
  exports: [UsersServiceInterface]
})
export class UsersModule { }
