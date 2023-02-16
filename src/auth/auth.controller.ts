import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup() {
    const response = this.authService.signup();

    return response;
  }

  @Post('signin')
  signin() {
    const response = this.authService.signin();

    return response;
  }
}
