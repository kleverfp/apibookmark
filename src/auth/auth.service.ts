import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';
@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  signin() {
    return { msg: 'sign' };
  }

  async signup(authDto: AuthDto) {
    const hash = await argon.hash(authDto.password);

    const user = await this.prisma.user.create({
      data: {
        email: authDto.email,
        hash,
      },
    });

    delete user.hash;

    return user;
  }
}
