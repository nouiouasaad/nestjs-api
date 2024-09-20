import {
    BadRequestException,
    Body,
    Controller,
    Post,
    Request,
    UseGuards,
} from '@nestjs/common';
import { AuthService } from '../services/auth.service';

import { AuthGuard } from '@nestjs/passport';
import { LoginResponseDto } from '../dtos/login-response.dto';
import { RegisterResponseDto } from '../dtos/register-response.dto';
import { Public } from '../decorators/public.decorator';
import { CreateUserDto } from '../../users/dto/create-user.dto';

@Public()
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @UseGuards(AuthGuard('local'))
    @Post('login')
    signIn(@Body() signInDto: Record<string, any>): Promise<LoginResponseDto | BadRequestException> {
        return this.authService.signIn(signInDto.email, signInDto.password);
    }

    @Post('register')
    async register(
        @Body() registerBody: CreateUserDto,
    ): Promise<RegisterResponseDto | BadRequestException> {
        return await this.authService.register(registerBody);
    }
}