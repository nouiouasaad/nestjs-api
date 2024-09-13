import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UsersServiceInterface } from '../interfaces/users-service.interface';
import { User } from '../entities/user.entity';

@Injectable()
export class UsersService implements UsersServiceInterface {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) { }

    findOneByEmail(email: string): Promise<User> {
        return this.userRepository.findOneBy({
            email
        });
    }
}
