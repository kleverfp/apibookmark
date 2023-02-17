import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup(@Body() authDto: AuthDto) {
    const response = this.authService.signup(authDto);

    return response;
  }

  @Post('signin')
  signin() {
    const response = this.authService.signin();

    return response;
  }
}
