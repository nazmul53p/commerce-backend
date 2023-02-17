import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { AuthLoginDto } from './dto/login-auth.dto';
import { AuthSignupDto } from './dto/signup-auth.dto';
import { Public } from './Jwt-token/Jwt-token.guard';

@ApiTags('auth')
@Public()
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('signup')
    signup(@Body() authSignupDto: AuthSignupDto) {
        return this.authService.signup(authSignupDto);
    }

    @Post('login')
    login(@Body() authLoginDto: AuthLoginDto) {
        return this.authService.login(authLoginDto);
    }
}
