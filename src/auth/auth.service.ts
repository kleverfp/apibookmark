import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';
import { Prisma } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  signin() {
    return { msg: 'sign' };
  }

  async signup(authDto: AuthDto) {
    const hash = await argon.hash(authDto.password);
    try {
      const user = await this.prisma.user.create({
        data: {
          email: authDto.email,
          hash,
          firstName: authDto.firstName,
          lastName: authDto.lastName,
        },
      });

      delete user.hash;

      return user;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credentials taken');
        }
      }
      throw error;
    }
  }
}
