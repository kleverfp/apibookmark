import { Controller, Get } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('users')
export class UserController {
  @Get('me')
  getMe(request: Request, response: Response) {
    return response.json({ msg: 'user ok' });
  }
}
